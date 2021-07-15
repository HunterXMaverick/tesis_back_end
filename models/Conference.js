const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Conference = new Schema({
  link: { type: String },
  date: { type: Date },
  hour: { type: String },
  postulation_id: { type: String },
  reviewer_id: { type: String },
  congress_id: { type: String },
});

module.exports = mongoose.model("conference", Conference);
