require("dotenv").config();

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const morgan = require("morgan");
const morganBody = require("morgan-body");
const mongoose = require("mongoose");

const app = express();

const DB_URI = process.env.MONGOLAB_URI;
const APP_PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV;
const CLIENT_URL_PROD = process.env.CLIENT_URL_PROD;
const CLIENT_URL_DEV = process.env.CLIENT_URL_DEV;
const TEST_PROD = process.env.TEST_PROD;

// https://www.npmjs.com/package/express-rate-limit#usage
app.set("trust proxy", 1);
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

// MONGO CONNECTION
mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .catch(error => console.log("Database error: " + JSON.stringify(error)));

const corsOpts = {
  origin:
    NODE_ENV === "production" && TEST_PROD ? CLIENT_URL_PROD : CLIENT_URL_DEV,
  credentials: true
};

// MIDDLEWARE
app.use(cors(corsOpts));
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// https://www.npmjs.com/package/morgan-body
morganBody(app);
morgan("combined");

// API ROUTES
const routes = require("./routes");
app.use("/api", routes);

app.get("/", (_, res) => res.status(200).json({ status: "OK" }));

app.listen(APP_PORT, () => console.log("Listening on port " + APP_PORT));

module.exports = app;
