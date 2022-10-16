import mongoose from "mongoose"

const BankAccountsScheme = new mongoose.Schema({
    account_number: {
        type: Number,
        required: true
    },
    actionType: {
        deposit: {
            amount: {
                type: Number
            },
            date: {
                type: Date
            }
        },
        withdraw: {
            amount: {
                type: Number
            },
            date: {
                type: Date
            }
        },
        loan: {
            amount: {
                type: Number
            },
            interest: {
                type: Number
            },
            paymentsCount: {
                type: Number
            },
            loanDate: {
                type: Date
            }
        }
    }
})

export const BankAccount = mongoose.model("AccountOperation", BankAccountsScheme);

// const bankAccount = new BankAccount;

// bankAccount.save(function (err) {
//     if (err) return console.log(err);
// });
// console.log(bankAccount);

// BankAccount.create({ account_number: 11223344 }, function (err, small) {
//     if (err) console.log(err);
//     // saved!
// });
// BankAccount.create({ account_number: 1122223344 }, function (err, small) {
//     if (err) console.log(err);
//     // saved!
// });
