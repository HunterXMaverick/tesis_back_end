const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Congress = new Schema({
  name: { type: String },
  address_web: { type: String },
  start_date: { type: Date },
  end_date: { type: Date },
  logo: { type: String },
  publicity_image: { type: String },
  limit_speaker_time: { type: Date },
  regulations: { type: String },
  politics: { type: String },
  capacity_speakers: { type: Number },
  capacity_participants: { type: Number },
  knowledge_area: { type: String },
  status_congress: {
    type: String,
    enum: ["Pendiente", "Habilitado", "Inhabilitado"],
  },
  person_id: { type: String },
});

module.exports = mongoose.model("congresses", Congress);
