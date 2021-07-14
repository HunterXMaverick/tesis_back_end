const Congress = require("../models/Congress");

let getCongress = async (req, res) => {
  let congress = await Congress.find();

  if (congress) {
    return res.status(200).json({
      ok: true,
      data: congress,
      info: "",
    });
  } else if (congress.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "No hay ningún congreso registrado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postCongress = async (req, res) => {
  let { congress } = req.body,
    newCongress = new Congress(congress);

  await newCongress
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newCongress,
        info: "Congreso creado exitosamente",
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

let putCongress = async (req, res) => {
  let { id } = req.params,
    { congress } = req.body,
    putCongress = await Congress.updateOne({ _id: id }, { $set: congress });

  if (putCongress) {
    return res.status(200).json({
      ok: true,
      data: congress,
      info: "Congreso actualizado exitosamente",
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
  getCongress,
  postCongress,
  putCongress,
};
