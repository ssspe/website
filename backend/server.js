const express = require("express");
const bodyParser = require("body-parser");

const API_PORT = 3001;
const app = express();
const router = express.Router();
const request = require('request');
const https = require("https");
const api = require("./api");
const api2 = require("./api2");


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", api);
app.use("/api", api2);

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
