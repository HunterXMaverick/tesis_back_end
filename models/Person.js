const mongoose = require("mongoose"),
  { Schema } = mongoose;

const Person = new Schema({
  rol: {
    type: String,
    enum: ["Administrador", "Organizador", "Revisor", "Ponente", "Participante"],
  },
  level_academy: {
    type: String,
    enum: ["Masterado", "Tercer Nivel", "Segundo Nivel"],
  },
  // specialty: {
  //   type: String,
  //   enum: ["Medicina", "Economía", "Deportes", "Educacion"],
  // },
  title: { type: String },
  type_dni: {
    type: String,
    enum: ["Cédula", "Pasaporte"],
  },
  dni: { type: String, unique: true, index: true },
  profile_picture: { type: String },
  names: { type: String },
  last_names: { type: String },
  phone: { type: String },
  email: { type: String },
  password: { type: String },
  status: { type: Boolean },
});

module.exports = mongoose.model("persons", Person);
