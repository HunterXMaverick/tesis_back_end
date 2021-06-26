const mongoose = require("mongoose"),
    { Schema } = mongoose;

const Assignment = new Schema({
    reviewer_id: { type: String },
    postulation_id: { type: String },
});

module.exports = mongoose.model("assigment", Assignment);