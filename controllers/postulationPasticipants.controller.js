const PostulationParticipants = require("../models/PostulationParticipants");

let getPostulationParticipantsById = async (req, res) => {
  let { id } = req.params,
    PostulationParticipants = await PostulationParticipants.findById({ _id: id });

  if (PostulationParticipants) {
    return res.status(200).json({
      ok: true,
      data: PostulationParticipants,
      info: "",
    });
  } else if (PostulationParticipants.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "La postulación-participante no está registrada en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getPostulationParticipantss = async (req, res) => {
  let PostulationParticipantss = await PostulationParticipants.find().sort({
    knowledge_area: 1,
  });

  if (PostulationParticipantss) {
    return res.status(200).json({
      ok: true,
      data: PostulationParticipantss,
      info: `Postulacione-participantes registradas: ${PostulationParticipantss.length}`,
    });
  } else if (PostulationParticipantss.length === 0) {
    return res.status(404).json({
      ok: true,
      data: PostulationParticipantss,
      info: `No hay ningún postulacion-participante registrado`,
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postPostulationParticipants = async (req, res) => {
  let { PostulationParticipants } = req.body,
    newPostulationParticipants = new PostulationParticipants(PostulationParticipants);

  await newPostulationParticipants
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newPostulationParticipants,
        info: "Postulación-participante almacenada",
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

let putPostulationParticipants = async (req, res) => {
  let { id } = req.params,
    { PostulationParticipants } = req.body,
    updatePostulationParticipants = await PostulationParticipants.updateOne(
      { _id: id },
      { $set: PostulationParticipants }
    );

  if (updatePostulationParticipants) {
    return res.status(200).json({
      ok: true,
      data: PostulationParticipants,
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

let deletePostulationParticipants = async (req, res) => {
  let { id } = req.params,
    deletePostulationParticipants = await PostulationParticipants.deleteOne({ _id: id });

  if (deletePostulationParticipants) {
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


module.exports = {
  getPostulationParticipantsById,
  getPostulationParticipantss,
  postPostulationParticipants,
  putPostulationParticipants,
  deletePostulationParticipants,
};
