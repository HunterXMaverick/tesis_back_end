const express = require("express"),
  personController = require("../controllers/person.controller"),
  authenticate = require("../middlewares/authenticate"),
  encodings = require("../middlewares/encodings");

let api = express.Router();

api.get("/getPersonById/:id", personController.getPersonById);
api.get("/getPersonByEmail/:email", personController.getPersonByEmail);
api.get("/getPersons", [authenticate.tokenAuth], personController.getPersons);
api.post(
  "/postPerson",
  [encodings.encodePassword],
  personController.postPerson
);
api.put("/putPerson/:id", [authenticate.tokenAuth], personController.putPerson);
api.put(
  "/disablePerson/:id",
  [authenticate.tokenAuth],
  personController.disablePerson
);
api.post("/login", personController.login);

module.exports = api;
