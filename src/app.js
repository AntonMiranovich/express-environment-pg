const express = require("express");
const bodyParser = require("body-parser");
const route = require("./controller/environment.controller");

const app = express();

app.use(bodyParser.json());

app.use("/environment", route);

app.use((er, req, res, _next) => res.send(er.message));

module.exports = app;
