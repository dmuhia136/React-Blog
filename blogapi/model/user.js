const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = mongoose.Schema(
    {
        firstName: { type: String },
        lastName: { type: String },
        email: {
            type: String, unique: true, required: "Please enter your email",
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Please fill a valid email address",
            ],
        },
        phoneNumber: { type: String },
        password: { type: String }
    },

    { timestamps: true, autoIndex: true, autoCreate: true },

);
const user = mongoose.model("user", userSchema);
module.exports = user;
