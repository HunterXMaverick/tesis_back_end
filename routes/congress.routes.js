const express = require("express"),
  congressController = require("../controllers/congress.controller"),
  authenticate = require("../middlewares/authenticate");

let api = express.Router();

api.get(
  "/getCongress",
  // [authenticate.tokenAuth],
  congressController.getCongress
);
api.post(
  "/postCongress",
  [authenticate.tokenAuth],
  congressController.postCongress
);
api.put(
  "/putCongress/:id",
  [authenticate.tokenAuth],
  congressController.putCongress
);

api.put(
  "/disableCongress/:id",
  [authenticate.tokenAuth],
  congressController.disableCongress
);
api.get("/getCongressById/:id", congressController.getCongressById);

module.exports = api;
