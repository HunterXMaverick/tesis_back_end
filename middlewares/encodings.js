const bcrypt = require("bcrypt");

let encodePassword = (req, res, next) => {
  let { person } = req.body || null;

  if (!person || person.password === "" || !person.password) {
    return res.status(401).json({
      ok: false,
      data: null,
      info: "Usuario o contraseña inválidos",
    });
  } else {
    let encodePassword = bcrypt.hashSync(
      person.password,
      bcrypt.genSaltSync(10)
    );
    if (encodePassword) {
      person.password = encodePassword;
      person.createAt = new Date();
      if (req.sessionID) {
        person.sessionID = req.sessionID;
        next();
      } else {
        return res.status(400).json({
          ok: false,
          data: null,
          info: "No se encontró una sesión válida",
        });
      }
    } else {
      return res.status(401).json({
        ok: false,
        data: null,
        info: "Contraseña no encriptada",
      });
    }
  }
};

module.exports = {
  encodePassword,
};
