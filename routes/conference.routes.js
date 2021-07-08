const express = require("express"),
conferenceController = require("../controllers/conference.controller"),
authenticate = require("../middlewares/authenticate");

let api = express.Router();

api.get("/getConference", [authenticate.tokenAuth], conferenceController.getConference);
api.post("/postConference", [authenticate.tokenAuth], conferenceController.postConference);
api.put("/putConference/:id", [authenticate.tokenAuth], conferenceController.putConference);

module.exports = api;