const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Postulation = new Schema({
  title_project: { type: String },
  summary_project: { type: String },
  summary_pdf: { type: String },
  knowledge_area: { type: String },
  files: { type: String },
  // presentation_date: { type: Date },
  person_id: { type: String },
  status: {
    type: String,
    enum: ["Pendiente", "Aprobado", "Reprobado"],
  },
  status_quelification: { type: Boolean },
  congress_id: { type: String },
});

module.exports = mongoose.model("postulations", Postulation);
