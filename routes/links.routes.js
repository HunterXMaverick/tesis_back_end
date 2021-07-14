const express = require("express"),
  linksController = require("../controllers/links.controller"),
  authenticate = require("../middlewares/authenticate");

let api = express.Router();

api.get(
  "/getLinkById/:id",
  [authenticate.tokenAuth],
  linksController.getLinkById
);
api.get("/getLinks", [authenticate.tokenAuth], linksController.getLinks);
api.post("/postLink", [authenticate.tokenAuth], linksController.postLink);
api.put("/putLink/:id", [authenticate.tokenAuth], linksController.putLink);
api.delete(
  "/deleteLink/:id",
  [authenticate.tokenAuth],
  linksController.deleteLink
);

module.exports = api;
