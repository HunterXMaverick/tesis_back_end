const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Rubric = new Schema({
  qualificationCriteria: { type: Array },
  congress_id: { type: String },
  state: { type: Boolean },
});

module.exports = mongoose.model("rubric", Rubric);
