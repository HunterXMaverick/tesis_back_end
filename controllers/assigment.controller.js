const Assigment = require("../models/Assignment");

let getAssigments = async (req, res) => {
  let assigments = await Assigment.find();

  if (assigments) {
    return res.status(200).json({
      ok: true,
      data: assigments,
      info: "",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getAssigmentsByReviewer = async (req, res) => {
  let { reviewer_id } = await req.params,
    assigments = await Assigment.find({ reviewer_id });

  if (assigments) {
    return res.status(200).json({
      ok: true,
      data: assigments,
      info: `Postulaciones del usuario con ID: ${reviewer_id}`,
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postAssigment = async (req, res) => {
  let { assigment } = req.body,
    newAssigment = new Assigment(assigment);

  await newAssigment
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newAssigment,
        info: "Asignado exitosamente.",
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

let putAssigment = async (req, res) => {
  let { id } = req.params,
    { assigment } = req.body,
    putAssigment = await Congress.updateOne({ _id: id }, { $set: congress });

  if (putAssigment) {
    return res.status(200).json({
      ok: true,
      data: assigment,
      info: "asignacion actualizado exitosamente",
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
  getAssigments,
  getAssigmentsByReviewer,
  postAssigment,
  putAssigment,
};