const express = require("express"),
    api = express.Router();

const participationsController = require("../controllers/participations.controller"),
    authenticate = require("../middlewares/authenticate");

api.get("/getParticipation", [authenticate.tokenAuth], participationsController.getParticipation);
api.post("/postParticipation", [authenticate.tokenAuth], participationsController.postParticipation)

module.exports = api;