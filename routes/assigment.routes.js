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
  "/getAssigmentsByReviewer/:reviewer_name",
  [authenticate.tokenAuth],
  assigmentController.getAssigmentsByReviewer
);

api.post(
  "/postAssigment",
  [authenticate.tokenAuth],
  assigmentController.postAssigment
);

api.delete(
  "/deleteAssigment/:id",
  [authenticate.tokenAuth],
  assigmentController.deleteAssigment
);

module.exports = api;
