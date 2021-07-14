const Rubric = require("../models/Rubric");

let getRubrics = async (req, res) => {
  let rubrics = await Rubric.find();

  if (rubrics) {
    res.status(200).json({
      ok: true,
      data: rubrics,
      info: "",
    });
  } else if (rubrics.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "No existen rúbricas registradas.",
    });
  } else {
    res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let getRubricById = async (req, res) => {
  let { id } = req.params,
    rubric = await Rubric.findById({ _id: id });

  if (rubric) {
    return res.status(200).json({
      ok: true,
      data: rubric,
      info: "",
    });
  } else if (rubric.length === 0) {
    return res.status(404).json({
      ok: true,
      data: null,
      info: "La rúbrica no está registrado en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "",
    });
  }
};

let postRubric = async (req, res) => {
  let { rubric } = req.body,
    newRubric = new Rubric(rubric);

  await newRubric
    .save()
    .then(() => {
      res.status(200).json({
        ok: true,
        data: newRubric,
        info: "Rúbrica creada.",
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

let putRubric = async (req, res) => {
  let { id } = req.params,
    { rubric } = req.body,
    putRubric = await Rubric.updateOne({ _id: id }, { $set: rubric });

  if (putRubric) {
    res.status(200).json({
      ok: true,
      data: rubric,
      sms: "Rúbrica actualizada",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let deleteRubric = async (req, res) => {
  let { id } = req.params,
    deleteRubric = await Rubric.deleteOne({ _id: id });

  if (deleteRubric) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Rúbrica eliminada",
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
  getRubrics,
  getRubricById,
  postRubric,
  putRubric,
  deleteRubric,
};
