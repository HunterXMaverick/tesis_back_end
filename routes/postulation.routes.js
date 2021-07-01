const express = require("express"),
  postulationController = require("../controllers/postulation.controller"),
  authenticate = require("../middlewares/authenticate");

let api = express.Router();

api.get(
  "/getPostulationById/:id",
  [authenticate.tokenAuth],
  postulationController.getPostulationById
);
api.get(
  "/getPostulations",
  [authenticate.tokenAuth],
  postulationController.getPostulations
);
api.post(
  "/postPostulation",
  [authenticate.tokenAuth],
  postulationController.postPostulation
);
api.put(
  "/putPostulation/:id",
  [authenticate.tokenAuth],
  postulationController.putPostulation
);
api.delete(
  "/deletePostulation/:id",
  [authenticate.tokenAuth],
  postulationController.deletePostulation
);
api.put(
  "/disableSpeaker/:id",
  [authenticate.tokenAuth],
  postulationController.disableSpeaker
);

module.exports = api;
