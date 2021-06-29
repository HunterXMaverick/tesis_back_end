const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Assignment = new Schema({
  reviewer_data: { type: Object },
  knowledge_area: { type: String },
});

module.exports = mongoose.model("assigment", Assignment);
