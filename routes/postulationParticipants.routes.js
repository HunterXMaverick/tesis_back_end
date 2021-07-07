const express = require("express"),
  api = express.Router();

const postulationPasticipantsController = require("../controllers/postulationPasticipants.controller"),
  authenticate = require("../middlewares/authenticate");

api.get("/getPostulationPasticipantsController", [authenticate.tokenAuth], postulationPasticipantsController.getPostulationParticipantss);
api.get(
  "/getPostulationPasticipantsById/:id",
  [authenticate.tokenAuth],
  postulationPasticipantsController.getPostulationParticipantsById
);
api.post("/postPostulationPasticipantsn", [authenticate.tokenAuth], postulationPasticipantsController.postPostulationParticipants);
api.put("/putPostulationPasticipantsn/:id", [authenticate.tokenAuth], postulationPasticipantsController.putPostulationParticipants);

module.exports = api;
