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

module.exports = {
  getRubrics,
  postRubric,
  putRubric,
};
