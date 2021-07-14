const Links = require("../models/Links");

let getLinkById = async (req, res) => {
  let { id } = req.params,
    { link } = await Links.findById({ _id: id });

  if (link) {
    return res.status(200).json({
      ok: true,
      data: link,
      info: "",
    });
  } else if (link.length === 0) {
    return res.status(404).json({
      ok: false,
      data: link,
      info: "El enlace no existe en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getLinks = async (req, res) => {
  let links = await Links.find();

  if (links) {
    return res.status(200).json({
      ok: true,
      data: links,
      info: "",
    });
  } else if (links.length === 0) {
    return res.status(404).json({
      ok: false,
      data: links,
      info: "No hay ningún link registrado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postLink = async (req, res) => {
  let { link } = req.body,
    newLink = new Links(link);

  await newLink
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newLink,
        info: "Link creado",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        data: null,
        info: error,
      });
    });
};

let putLink = async (req, res) => {
  let { id } = req.params,
    { link } = req.body,
    putLink = await Links.updateOne({ _id: id }, { $set: link });

  if (putLink) {
    return res.status(200).json({
      ok: true,
      data: link,
      info: "Link actualizado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let deleteLink = async (req, res) => {
  let { id } = req.params,
    deleteLink = await Links.deleteOne({ _id: id });

  if (deleteLink) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Link borrado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

module.exports = {
  getLinkById,
  getLinks,
  postLink,
  putLink,
  deleteLink,
};
