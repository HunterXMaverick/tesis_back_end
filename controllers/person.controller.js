const Person = require("../models/Person"),
  jwt = require("jsonwebtoken"),
  bcrypt = require("bcrypt");

let getPersonById = async (req, res) => {
  let { id } = req.params,
    person = await Person.findById({ _id: id });

  if (person) {
    return res.status(200).json({
      ok: true,
      data: person,
      info: "",
      token: req.token,
    });
  } else if (person.length === 0) {
    return res.status(404).json({
      ok: true,
      data: null,
      info: "El usuario no está registrado en el sistema",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "",
    });
  }
};

let getPersonByEmail = async (req, res) => {
  let { email } = req.params,
    person = await Person.findOne({ email });

  if (person) {
    return res.status(200).json({
      ok: true,
      data: person,
      info: "",
      token: req.token,
    });
  } else {
    res.status(404).json({
      ok: false,
      data: null,
      info: "Correo no registrado en el sistema",
    });
  }
};

let getReviewers = async (req, res) => {
  let person = await Person.find({ rol: "Revisor" });

  if (person) {
    return res.status(200).json({
      ok: true,
      data: person,
      info: "",
      token: req.token,
    });
  } else if (person.length === 0) {
    return res.status(404).json({
      ok: true,
      data: null,
      info: `No existen usuarios con el rol de REVISOR.`,
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "",
    });
  }
};

let getPersons = async (req, res) => {
  let persons = await Person.find();

  if (persons) {
    return res.status(200).json({
      ok: true,
      data: persons,
      info: "",
      token: req.token,
    });
  } else if (persons.length === 0) {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "No hay ningún usuario registrado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let postPerson = async (req, res) => {
  let { person } = req.body,
    newPerson = new Person(person);

  await newPerson
    .save()
    .then(() => {
      return res.status(200).json({
        ok: true,
        data: newPerson,
        info: "Usuario creado",
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

let putPerson = async (req, res) => {
  let { id } = req.params,
    { person } = req.body,
    putPerson = await Person.updateOne({ _id: id }, { $set: person });

  if (putPerson) {
    return res.status(200).json({
      ok: true,
      data: person,
      info: "Usuario actualizado",
      token: req.token,
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

//CHECK
let disablePerson = async (req, res) => {
  let { id } = req.params,
    person = req.body,
    disablePerson = await Person.updateOne(
      { _id: id },
      { $set: { status: person.status } }
    );

  console.log(person);

  if (disablePerson) {
    return res.status(200).json({
      ok: true,
      data: null,
      info: "Usuario actualizado",
    });
  } else {
    return res.status(500).json({
      ok: false,
      data: null,
      info: "Server error",
    });
  }
};

let login = async (req, res) => {
  let { person } = req.body,
    personLog = await Person.find({ email: person.email, rol: person.rol });

  if (personLog.length == 1) {
    if (bcrypt.compareSync(person.password, personLog[0].password)) {
      let userData = {
        _id: personLog[0]._id,
        email: personLog[0].email,
        last_names: personLog[0].last_names,
        names: personLog[0].names,
        rol: personLog[0].rol,
        profile_picture: personLog[0].profile_picture
          ? personLog[0].profile_picture
          : null,
      };

      let token = jwt.sign(userData, process.env.KEY_JWT, {
        algorithm: "HS256",
        expiresIn: parseInt(process.env.TIME),
      });

      return res.status(200).json({
        ok: true,
        data: person,
        info: "Usuario encontrado",
        token,
      });
    } else {
      return res.status(401).json({
        ok: false,
        data: null,
        info: "Contraseña incorrecta",
      });
    }
  } else {
    return res.status(404).json({
      ok: false,
      data: null,
      info: "Usuario no encontrado",
    });
  }
};

module.exports = {
  getPersonById,
  getPersonByEmail,
  getReviewers,
  getPersons,
  postPerson,
  putPerson,
  disablePerson,
  login,
};
