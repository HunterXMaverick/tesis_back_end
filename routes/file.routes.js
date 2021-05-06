("use strict");

const express = require("express");
let api = express.Router();

const authenticate = require("../middlewares/authenticate"),
  fileController = require("../controllers/file.controller");
// [authenticate.tokenAuth],

api.get("/file/:directory/:urlFile", fileController.showFile);
api.post("/file/upload/:directory", fileController.uploadFile);
api.put("/file/:directory/:urlFile", fileController.modifyFile);
api.delete("/file/:directory/:urlFile", fileController.deleteFile);

module.exports = api;
