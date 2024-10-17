require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect(process.env.DB_URL)
  .then((result) => {
    console.log("Connected to the database.");
    app.listen(process.env.PORT);
    console.log("Server started at port: " + process.env.PORT);
  })
  .catch((error) => console.log("Unable to Connect to Database"));
