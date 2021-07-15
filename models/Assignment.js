const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Assignment = new Schema({
  reviewer_name: { type: String },
  knowledge_area: { type: String },
  congress_id: { type: String },
});

module.exports = mongoose.model("assigment", Assignment);
