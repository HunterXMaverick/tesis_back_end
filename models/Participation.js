const mongoose = require("mongoose"),
    { Schema } = mongoose;

const Participation = new Schema({
    attend: { type: String },
    person_id: { type: String },
});

module.exports = mongoose.model("participations", Participation);