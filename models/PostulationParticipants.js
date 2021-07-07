const mongoose = require("mongoose"),
    { Schema } = mongoose;

const PostulationParticipants = new Schema({
    postulation_id: { type: String },
    person_id: { type: String },
    status: {
        type: String,
        enum: ["Pendiente", "Aceptado", "Rechazado"],
    },
});

module.exports = mongoose.model("postulationParticipants", PostulationParticipants);
