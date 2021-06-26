const mongoose = require("mongoose"),
  { USER_DB, PASS_DB, HOST_DB, NAME_DB } = process.env;

/**
 * Constante de conexión a mongo atlas
 */
//const uri = `mongodb+srv://${USER_DB}:${PASS_DB}@${HOST_DB}/${NAME_DB}?retryWrites=true&w=majority`

/**
 * Constante de conexión a mongo local
 */
const uri = `mongodb://${HOST_DB}/${NAME_DB}`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error(err));
