const express = require("express"),
  assigmentController = require("../controllers/assigment.controller"),
  authenticate = require("../middlewares/authenticate");

let api = express.Router();

api.get(
  "/getAssigments",
  [authenticate.tokenAuth],
  assigmentController.getAssigments
);
api.get(
  "/getAssigmentsByReviewer/:reviewer_id",
  [authenticate.tokenAuth],
  assigmentController.getAssigmentsByReviewer
);
api.post(
  "/postAssigment",
  [authenticate.tokenAuth],
  assigmentController.postAssigment
);
api.put(
  "/putAssigment/:id",
  [authenticate.tokenAuth],
  assigmentController.putAssigment
);

module.exports = api;
