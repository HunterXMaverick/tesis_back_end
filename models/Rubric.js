const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Rubric = new Schema({
  qualificationCriteria: { type: Array },
  congress_id: { type: String },
});

module.exports = mongoose.model("rubric", Rubric);
