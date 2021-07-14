const express = require("express"),
  api = express.Router();

const postulationPasticipantsController = require("../controllers/postulationPasticipants.controller"),
  authenticate = require("../middlewares/authenticate");

api.get(
  "/getPostulationParticipantsController",
  [authenticate.tokenAuth],
  postulationPasticipantsController.getPostulationParticipantss
);
api.get(
  "/getPostulationParticipantsById/:id",
  [authenticate.tokenAuth],
  postulationPasticipantsController.getPostulationParticipantsById
);
api.get(
  "/getParticipantPostulationsLength/:id",
  [authenticate.tokenAuth],
  postulationPasticipantsController.getParticipantPostulationsLength
);

api.post(
  "/postPostulationParticipants",
  [authenticate.tokenAuth],
  postulationPasticipantsController.postPostulationParticipants
);
api.put(
  "/putPostulationParticipants/:id",
  [authenticate.tokenAuth],
  postulationPasticipantsController.putPostulationParticipants
);

module.exports = api;
