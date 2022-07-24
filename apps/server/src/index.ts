import express from "express"
import mongooseConnectionModule from "./mongodb/mongodbConnection";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { BankAccount } from "./mongodb/schemas/myScheme";

dotenv.config();

mongooseConnectionModule()

const app = express()
app.use(cors());
app.use(bodyParser.json());

app.get("/health_check", (req, res, next) => {
    res.json({ message: "ok" })
})
app.get("/account_actions/:account_number", async (req, res, next) => {
    try {
        const accountNumber = req?.params?.account_number
        const accountActions = await BankAccount.find({ account_number: accountNumber })
        if (accountActions) {
            res.status(200).json({ message: "ok", accountActions })
        }
    } catch (error) {
        res.status(400).json({ message: "somthing went erong", errMsg: error.message })
    }
});
app.post("/account_actions/:account_number", async (req, res, next) => {
    try {
        const accountNumber = req?.params?.account_number;
        const { selected_action, amount, action_date, interest, paymentsCount } = req.body
        if (selected_action === 'loan' && interest && paymentsCount) {
            const insertLoanAction = await BankAccount.create({
                account_number: accountNumber,
                actionType: {
                    [selected_action]:
                    {
                        amount: amount,
                        interest: interest,
                        paymentsCount: paymentsCount,
                        loanDate: action_date,
                    }
                }
            })
            const loanResult = await insertLoanAction.save();
            if (loanResult) {
                return res.status(200).json({ message: "loan action inserted", loanResult })
            } else {
                return res.status(404).json({ message: "something went wrong" })
            }
        } else if (selected_action === 'deposit' || selected_action === 'withdraw') {
            const insertAction = await BankAccount.create({
                account_number: accountNumber,
                actionType: {
                    [selected_action]:
                    {
                        amount: amount, date: action_date
                    }
                }
            })
            const actionResult = await insertAction.save();
            if (actionResult) {
                return res.status(200).json({ message: `${selected_action} action inserted`, actionResult })
            } else {
                return res.status(404).json({ message: "something went wrong" })
            }
        } else {
            return res.status(403).json({ message: "bad request" })
        }
    } catch (error) {
        res.status(400).json({ message: "somthing went erong", errMsg: error.message })
    }
});
const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`api listening to port ${PORT}`);
});

