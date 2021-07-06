const Participations = require("../models/Participations");

let getParticipation = async (req, res) => {
    let participation = await Participations.find();

    if (participations) {
        res.status(200).json({
            ok: true,
            data: participation,
            info: ""
        });
    } else {
        res.status(500).json({
            ok: false,
            data: null,
            info: "Server error"
        })
    }
}

let postParticipation = async (req, res) => {
    let { participation } = req, body,
        newParticipation = new Participations(participations)

    await newParticipation
    .save()
    .then(()=> {
        res.status(200).json({
            ok: true,
            data: newParticipation,
            info: "asignacion listo"
        });
    })
    .catch((error) => {
        return res.status(500).json({
            ok: false,
            data: null,
            info: `El error es ${error}`
        });
    });
}

module.exports = {
    getParticipation,
    postParticipation
}