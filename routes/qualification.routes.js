const express = require("express"),
  api = express.Router();

const qualificationController = require("../controllers/qualification.controller"),
  authenticate = require("../middlewares/authenticate");

api.get("/getQualification", [authenticate.tokenAuth], qualificationController.getQualifications);
api.get(
  "/getQualificationById/:id",
  [authenticate.tokenAuth],
  qualificationController.getQualificationById
);
api.post("/postQualification", [authenticate.tokenAuth], qualificationController.postQualification);
api.put("/putQualification/:id", [authenticate.tokenAuth], qualificationController.putQualification);

module.exports = api;
