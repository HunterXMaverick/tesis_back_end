const Postulation = require("../models/Postulation");

let getPostulationById = async (req, res) => {
  let { id } = req.params,
    postulation = await Postulation.findById({ _id: id });

  if (postulation) {
    return res.status(200).json({
      ok: true,
      data: postulation,
      info: "",
    });
  } else if (postulation.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "La postulación no está registrada en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getPostulations = async (req, res) => {
  let postulations = await Postulation.find().sort({
    knowledge_area: 1,
  });

  if (postulations) {
    return res.status(200).json({
      ok: true,
      data: postulations,
      info: `Postulaciones registradas: ${postulations.length}`,
    });
  } else if (postulations.length === 0) {
    return res.status(404).json({
      ok: true,
      data: postulations,
      info: `No hay ningúna postulación registrado`,
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postPostulation = async (req, res) => {
  let { postulation } = req.body,
    newPostulation = new Postulation(postulation);

  await newPostulation
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newPostulation,
        info: "Postulación almacenada",
      });
    })
    .catch((error) => {
      return res.status(500).json({
        ok: false,
        data: null,
        info: `El error es: ${error}`,
      });
    });
};

let putPostulation = async (req, res) => {
  let { id } = req.params,
    { postulation } = req.body,
    updatePostulation = await Postulation.updateOne(
      { _id: id },
      { $set: postulation }
    );

  if (updatePostulation) {
    return res.status(200).json({
      ok: true,
      data: postulation,
      info: "Postulación actualizada",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let deletePostulation = async (req, res) => {
  let { id } = req.params,
    deletePostulation = await Postulation.deleteOne({ _id: id });

  if (deletePostulation) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Postulación eliminada",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let disableSpeaker = async (req, res) => {
  let { id } = req.params,
    { postulation } = req.body,
    disableSpeaker = await Postulation.updateOne(
      { _id: id },
      { $set: { status: postulation } }
    );

  if (disableSpeaker) {
    res.status(200).json({
      ok: true,
      data: null,
      info: "Ponente Aceptado",
    });
  } else {
    res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getPostulationknowledgeArea = async (req, res) => {
  let { knowledge_area } = await req.params,
    postulation = await Postulation.find({ knowledge_area });

  if (postulation) {
    return res.status(200).json({
      ok: true,
      data: postulation,
      info: `Area De Conocimiento: ${knowledge_area}`,
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
  getPostulationById,
  getPostulations,
  postPostulation,
  putPostulation,
  deletePostulation,
  disableSpeaker,
  getPostulationknowledgeArea,
};
