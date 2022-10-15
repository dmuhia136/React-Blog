const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = mongoose.Schema(
    {
        title: { type: String },
        body: { type: String },
        author: {
            type: Schema.Types.ObjectId,
            ref: "user",
            default: null,
        },
        image: { type: String }
    },

    { timestamps: true, autoIndex: true, autoCreate: true },

);
const post = mongoose.model("post", postSchema);
module.exports = post;
