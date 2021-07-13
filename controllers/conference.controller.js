const Conference = require("../models/Conference");

let getConference = async (req, res) => {
  let conference = await Conference.find();

  if (conference) {
    return res.status(200).json({
      ok: true,
      data: conference,
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

let postConference = async (req, res) => {
  let { conference } = req.body,
    newConference = new Conference(conference);

  await newConference
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newConference,
        info: "Conferencia creada exitosamente",
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

let putConference = async (req, res) => {
  let { id } = req.params,
    { conference } = req.body,
    putConference = await Conference.updateOne(
      { _id: id },
      { $set: conference }
    );

  if (putConference) {
    return res.status(200).json({
      ok: true,
      data: conference,
      into: "Conferencia actualizada exitosamente",
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
  getConference,
  postConference,
  putConference,
};
