const express = require("express"),
  passport = require("passport"),
  cors = require("cors");

require("../config/database");

let app = express();

/**
 * Import Routes
 */
let congressRoutes = require("../routes/congress.routes"),
  personRoutes = require("../routes/person.routes"),
  postulationRoutes = require("../routes/postulation.routes"),
  linksRoutes = require("../routes/links.routes"),
  fileRoutes = require("../routes/file.routes");

let session = require("express-session"),
  sess = {
    secret: process.env.KEY_SESSION,
    resave: false,
    saveUninitialized: true,
    name: "sessionID",
    cookie: {
      httpOnly: false,
      maxAge: parseInt(process.env.TIME),
    },
  };

/**
 * For access client
 *
 * @type {{origin: string, optionsSuccessStatus: number}}
 */
let corsOptions = {
  origin: "http://localhost:4200",
  optionsSuccessStatus: 200,
};

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

/**
 * CORS
 */
app.use(cors(corsOptions));

/**
 * SESSION
 */
app.use(session(sess));

/**
 * PASSPORT
 */
app.use(passport.initialize());
app.use(passport.session());

/**
 * Export Routes
 */
app.use("/api", congressRoutes);
app.use("/api", personRoutes);
app.use("/api", postulationRoutes);
app.use("/api", linksRoutes);
app.use("/api", fileRoutes);

module.exports = app;
