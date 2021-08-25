const express = require("express"),
  personController = require("../controllers/person.controller"),
  authenticate = require("../middlewares/authenticate"),
  encodings = require("../middlewares/encodings");

let api = express.Router();

api.get("/getPersonById/:id", personController.getPersonById);
api.get("/getPersonByEmail/:email", personController.getPersonByEmail);
api.get("/getPersons", [authenticate.tokenAuth], personController.getPersons);
api.get(
  "/getReviewers",
  [authenticate.tokenAuth],
  personController.getReviewers
);

api.post(
  "/postPerson",
  [encodings.encodePassword],
  personController.postPerson
);
api.post("/login", personController.login);

api.put(
  "/putPerson/:id",
  [authenticate.tokenAuth, encodings.encodePassword],
  personController.putPerson
);

api.put(
  "/putPersonNoPass/:id",
  [authenticate.tokenAuth],
  personController.putPerson
);

api.put(
  "/disablePerson/:id",
  [authenticate.tokenAuth],
  personController.disablePerson
);

module.exports = api;
