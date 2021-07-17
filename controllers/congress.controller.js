const Congress = require("../models/Congress");

let getCongressById = async (req, res) => {
  let { id } = req.params,
    { congress } = await Congress.findById({ _id: id });

  if (link) {
    return res.status(200).json({
      ok: true,
      data: congress,
      info: "",
    });
  } else if (congress.length === 0) {
    return res.status(404).json({
      ok: false,
      data: congress,
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
}

//CHECK
let disableCongress = async (req, res) => {
  let { id } = req.params,
    congress = req.body,
    disableCongress = await Congress.updateOne(
      { _id: id },
      { $set: { status_congress: congress.status_congress } }
    );

  console.log(congress);

  if (disableCongress) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Congreso actualizado",
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
  disableCongress,
  getCongressById
};
