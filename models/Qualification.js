const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Qualification = new Schema({
  postulation_id: { type: String },
  reviewersRating: { type: Array },
  qualificaty: { type: Number },
  remark: { type: Array },
  person_id: { type: String },
});

module.exports = mongoose.model("qualifications", Qualification);
