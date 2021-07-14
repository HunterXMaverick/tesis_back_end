const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Links = new Schema({
  name: { type: String },
  link_video: { type: String },
  date_event: { type: Date },
});

module.exports = mongoose.model("links", Links);
