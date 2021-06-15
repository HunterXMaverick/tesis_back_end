const express = require("express"),
  api = express.Router();

const rubricController = require("../controllers/rubric.controller"),
  authenticate = require("../middlewares/authenticate");

api.get("/getRubrics", [authenticate.tokenAuth], rubricController.getRubrics);
api.get(
  "/getRubricById",
  [authenticate.tokenAuth],
  rubricController.getRubricById
);
api.post("/postRubric", [authenticate.tokenAuth], rubricController.postRubric);
api.put("/putRubric/:id", [authenticate.tokenAuth], rubricController.putRubric);

module.exports = api;
