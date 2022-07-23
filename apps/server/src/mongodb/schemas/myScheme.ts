import mongoose from "mongoose"

const MyScheme = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    }
})

// export const User = mongoose.model("User", MyScheme);
export const User = mongoose.model("User", MyScheme);



