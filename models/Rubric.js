const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Rubric = new Schema({
  qualificationCriteria: { type: Array },
  ratingRange: { type: String },
  reviewersRating: { type: Number },
});

module.exports = mongoose.model("rubric", Rubric);
