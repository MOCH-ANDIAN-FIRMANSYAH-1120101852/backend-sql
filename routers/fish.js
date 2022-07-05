const express = require("express");
const routerFish = express.Router();
const controllerFish = require("../controllers/fish");

// squential search

routerFish
  .route("/fish")
  .get(controllerFish.getFish)
  .post(controllerFish.insert);
routerFish
  .route("/fish/:kode")
  .get(controllerFish.getFishByKode)
  .put(controllerFish.update)
  .delete(controllerFish.delete);

// routerMahasiswa
//   .route("/fish/:kode")
//   .get(controllerMahasiswa.getMahasiswaByNim);

// routerMahasiswa.get("/mahasiswa/:nama/:alamat", (req, res) => {
//   const nama = req.params.nama;
//   const alamat = req.params.alamat;
//   res.send("Mahasiswa nama : " + nama + "alamat :" + alamat);
// });

// routerMahasiswa
//   .route("/mahasiswa/nilai/nim")
//   .get(controllerMahasiswa.getNilaiByNim);

module.exports = routerFish;
