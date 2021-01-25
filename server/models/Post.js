const mongoose = require("mongoose");
const { Schema } = mongoose;

let PostSchema = new Schema({
    title: {
        type: String,
        minlength: 1,
        maxlength: 100
    },
    description: String,
    date: {
        type: Date,
        default: Date.now
    }
});

let data = mongoose.model("Post", PostSchema);

module.exports = data;