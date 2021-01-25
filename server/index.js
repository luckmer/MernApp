const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const Secret = require("./Secret");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const CONNECTION_URL = Secret() ;
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true },console.log("conneceted to DB!"))
    .then(() => app.listen(PORT, () => console.log(`connected `)))
    .catch((err) => console.log(`${err} error`));

