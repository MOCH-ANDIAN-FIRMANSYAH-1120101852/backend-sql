const express = require("express");
const routerUkuran = express.Router();
const controllerUkuran = require("../controllers/ukuran");

// squential search

routerUkuran.route("/ukuran").get(controllerUkuran.getUkuran);

module.exports = routerUkuran;
