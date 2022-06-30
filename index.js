const mongoose = require("mongoose");
require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes/api");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(cors());

app.use("/api", apiRoutes, (res, req, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Content-Type", "application/json");
  next();
});

mongoose
  .connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
console.log(process.env.ATLAS_CONNECTION_URL);

app.listen(process.env.PORT, () => {
  console.log("Application is started on port = " + process.env.PORT);
});
