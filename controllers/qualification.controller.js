const Qualification = require("../models/Qualification");

let getQualifications = async (req, res) => {
  let qualification = await Qualification.find();

  if (qualification) {
    res.status(200).json({
      ok: true,
      data: qualification,
      info: "",
    });
  } else if (qualification.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "No existen calificaciones registradas.",
    });
  } else {
    res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getQualificationById = async (req, res) => {
  let { id } = req.params,
  qualification = await Qualification.findById({ _id: id });

  if (qualification) {
    return res.status(200).json({
      ok: true,
      data: qualification,
      info: "",
    });
  } else if (qualification.length === 0) {
    return res.status(404).json({
      ok: true,
      data: null,
      info: "La calificación no está registrado en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "",
    });
  }
};

let postQualification = async (req, res) => {
  let { qualification } = req.body,
    newQualification = new Qualification(qualification);

  await newQualification
    .save()
    .then(() => {
      res.status(200).json({
        ok: true,
        data: newQualification,
        info: "Calificación creada.",
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

let putQualification = async (req, res) => {
  let { id } = req.params,
    { qualification } = req.body,
    putQualification = await Qualification.updateOne({ _id: id }, { $set: qualification });

  if (putQualification) {
    res.status(200).json({
      ok: true,
      data: qualification,
      sms: "Calificación actualizada",
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
  getQualifications,
  getQualificationById,
  postQualification,
  putQualification,
};
