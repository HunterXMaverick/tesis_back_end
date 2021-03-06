const express = require("express"),
  api = express.Router();

const rubricController = require("../controllers/rubric.controller"),
  authenticate = require("../middlewares/authenticate");

api.get("/getRubrics", [authenticate.tokenAuth], rubricController.getRubrics);
api.get(
  "/getRubricById/:id",
  [authenticate.tokenAuth],
  rubricController.getRubricById
);
api.post("/postRubric", [authenticate.tokenAuth], rubricController.postRubric);
api.put("/putRubric/:id", [authenticate.tokenAuth], rubricController.putRubric);
api.delete(
  "/rubric/:id",
  [authenticate.tokenAuth],
  rubricController.deleteRubric
);

module.exports = api;
