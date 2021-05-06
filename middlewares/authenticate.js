const jwt = require("jsonwebtoken");

let tokenAuth = (req, res, next) => {
  let token = req.headers.authorization || null;
  jwt.verify(token, process.env.KEY_JWT, (error, decode) => {
    if (error) {
      return res.status(400).json({
        ok: false,
        data: error,
        info: "Token inválido",
      });
    } else {
      req.decode = decode;
      //   console.log(decode);
      next();
    }
  });
};

let emailAuth = (req, res, next) => {
  let person = req.body.person;
  let path = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  let validate = path.test(person.email);
  if (validate) {
    next();
  } else {
    return res.status(401).json({
      ok: false,
      data: null,
      info: "El correo no es válido",
    });
  }
};

module.exports = {
  tokenAuth,
  emailAuth,
};
