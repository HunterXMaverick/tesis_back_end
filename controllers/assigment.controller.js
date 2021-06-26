const Assigment = require("../models/Assignment");

let getAssigment = async (req, res) => {
    let assigment = await Assigment.find();

    if (assigment) {
        return res.status(200).json({
            ok: true,
            data: congress,
            info: "",
        })
    } else {
        return res.status(500).json({
            ok: false,
            data: null,
            info: "Server error"
        });
    }
}

let postAssigment = async (req, res) => {
    let { assigment } = req.body,
        newAssigment = new Assigment(assigment)

    await newAssigment
        .save()
        .then(() => {
            return res.status(200).json({
                ok: true,
                data: newAssigment,
                info: "asignacion creado exitosamente",
            });
        })
        .catch((error) => {
            return res.status(500).json({
                ok: false,
                data: null,
                info: error,
            });
        });
}

let putAssigment = async (req, res) => {
    let { id } = req.params,
        { assigment } = req.body,
        putCongress = await Congress.updateOne({ _id: id }, { $set: congress });

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
    getAssigment,
    postAssigment,
    putAssigment,
  };