const express = require("express");
const routerKualitas = express.Router();
const controllerKualitas = require("../controllers/kualitas");

// squential search

routerKualitas.route("/kualitas").get(controllerKualitas.getKualitas);

module.exports = routerKualitas;
