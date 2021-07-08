const mongoose = require("mongoose"),
    { Schema } = mongoose;

const Conference = new Schema({
    link: { type: String },
    start_date: { type: Date },
    end_date: { type: Date },
    hour: { type: Date},
    postulation_id: { type: String }
})

module.exports = mongoose.model("conference", Conference)