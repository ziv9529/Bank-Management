import mongoose from "mongoose";
import { BankAccount } from "./schemas/myScheme"
export default function init() {
    mongoose.connect("mongodb://localhost:27017/bank", {
    }, (err) => {
        if (err) console.log(err)
    })

    const myConnection = mongoose.connection;

    myConnection.on("error", (err) => {
        console.log("Mongo db connection error")
    })

    myConnection.on("open", () => {
        console.log("Mongo db connection Success!!!!")
        // const action1 = new BankAccount({
        //     account_number: 112233,
        //     actionType: {
        //         deposit:
        //         {
        //             amount: 1500, date: Date.now()
        //         }
        //     }
        // })
        // action1.save()
    })

    // myConnection.models.BankAccount.insertMany(bankAccountsData, function (err, categories) {
    //     if (err) {
    //         console.log(err);
    //         throw err
    //     }
    //     console.log(' BankAccounts inserted successfully');
    // })
};

const bankAccountsData: any[] = [
    {
        account_number: 1122336,
    },
    {
        account_number: 4315134,
    },
    {
        account_number: 112515,
    },
];