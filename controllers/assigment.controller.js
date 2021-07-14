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
  let { reviewer_name } = await req.params,
    assigments = await Assigment.find({ reviewer_name });

  if (assigments) {
    return res.status(200).json({
      ok: true,
      data: assigments,
      info: `Postulaciones que calificará el usuario con ID: ${reviewer_name}`,
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

let deleteAssigment = async (req, res) => {
  let { id } = req.params,
    deleteAssigment = await Assigment.deleteOne({ _id: id });

  if (deleteAssigment) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Assigment eliminado.",
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
  deleteAssigment,
};
