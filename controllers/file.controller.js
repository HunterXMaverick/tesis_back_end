const randomstring = require("randomstring"),
  fs = require("fs"),
  path = require("path");

/**
 * Función que carga la imagen desde el cliente al servidor.
 * @param req request
 * @param res response
 */
let uploadFile = (req, res) => {
  let { directory } = req.params,
    { file } = req.files,
    pathName = `./assets`;
    console.log(req.files)
  if (!fs.existsSync(pathName)) {
    fs.mkdirSync(pathName);
    pathName = `./assets/${directory}`;
    if (!fs.existsSync(pathName)) {
      fs.mkdirSync(pathName);
    }
  }

  if (file.mimetype == "application/pdf") {
    file.name = `${randomstring.generate(10)}.pdf`;

    file.mv(`./assets/${directory}/${file.name}`, (err) => {
      if (err) return res.status(500).send({ message: err });

      return res.status(200).json({
        ok: true,
        data: file.name,
        msm: "Uploaded file",
      });
    });
  }

  return res.status(400).json({
    ok: false,
    data: null,
    msm: "Mimetype not supported",
  });
};

/**
 * Función que recupera el archivo del servidor y lo muestra al cliente.
 * @param req request
 * @param res response
 */
let showFile = (req, res) => {
  let { directory, urlFile } = req.params,
    pathFile = `./assets/${directory}/${urlFile}`;

  fs.stat(pathFile, (_, stats) => {
    stats
      ? res.status(200).sendFile(path.resolve(pathFile))
      : res.status(400).json({
          ok: false,
          data: null,
          msm: "The file doesn't exist",
        });
  });
};

/**
 * Función que comprueba que exista un archivo y lo elimina.
 * @param req request
 * @param res response
 */
let deleteFile = (req, res) => {
  let { directory, urlFile } = req.params,
    pathFile = `./assets/${directory}/${urlFile}`;

  fs.unlink(pathFile, (deleted) => {
    console.log(!deleted);
    !deleted
      ? res.status(200).json({
          ok: true,
          data: null,
          msm: "File deleted",
        })
      : res.status(400).json({
          ok: false,
          data: null,
          msm: "The file doesn't exist",
        });
  });
};

/**
 * Función que comprueba existencia de un archivo y lo módifica.
 * @param  req request
 * @param res response
 */
let modifyFile = (req, res) => {
  let { directory, urlFile } = req.params,
    { file } = req.files,
    pathFile = `./assets/${directory}/${urlFile}`;

  fs.stat(pathFile, (_, stats) => {
    if (stats) {
      fs.unlink(pathFile, () => {});

      if (file.mimetype == "application/pdf") {
        file.name = `${randomstring.generate(10)}.pdf`;

        file.mv(`./assets/${directory}/${file.name}`, (err) => {
          if (err) return res.status(500).send({ message: err });

          return res.status(200).json({
            ok: true,
            data: file.name,
            msm: "Modified file",
          });
        });
      }
    } else {
      res.status(400).json({
        ok: false,
        data: null,
        msm: "The file doesn't exist",
      });
    }
  });
};

module.exports = {
  uploadFile,
  showFile,
  modifyFile,
  deleteFile,
};
