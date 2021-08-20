const express = require("express"),
  authenticate = require("../middlewares/authenticate"),
  fileController = require("../controllers/file.controller");

let api = express.Router();

api.get("/file/:directory/:urlFile", fileController.showFile);

api.post(
  "/file/upload/:directory",
  [authenticate.tokenAuth],
  fileController.uploadFile
);

api.put(
  "/file/:directory/:urlFile",
  [authenticate.tokenAuth],
  fileController.modifyFile
);

api.delete(
  "/file/:directory/:urlFile",
  [authenticate.tokenAuth],
  fileController.deleteFile
);

module.exports = api;
