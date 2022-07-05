const fish = require("../models/fish");

module.exports = {
  getFish: (req, res) => {
    fish.getFish((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || " onok error",
        });
      } else {
        res.send(data);
      }
    });
  },
  getFishByKode: (req, res) => {
    fish.getFishByKode(req.params.kode, (err, data) => {
      if (err) {
        if (err.kind === "tidak ditemukan") {
          res.status(404).send({
            message: `Fish  dengan kode: ${req.params.kode}tidak ditemukan`,
          });
        } else {
          res.status(500).send({
            message: "error" + req.params.nim,
          });
        }
      } else res.send(data);
    });
  },
  insert: (req, res) => {
    // ambildata request dari frontend
    if (!req.body) {
      res.status(400).send({
        message: "data tidak boleh ksong",
      });
    }
    fish.insert(req.body, (err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || "terjadi error",
        });
      } else {
        res.send(data);
      }
    });
  },
  update: (req, res) => {
    // UPDATE
    if (!req.body) {
      res.status(400).send({
        message: "data tidak boleh kosng",
      });
    }
    fish.update(req.params.kode, req.body, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `not found mahasiswa with nim ${req.params.kode}`,
          });
        } else {
          res.status(500).send({
            message: "error updating tutorial with nim " + req.params.kode,
          });
        }
      } else res.send(data);
    });
  },
  delete: (req, res) => {
    fish.delete(req.params.kode, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `not found mahasiswa with kode ${req.params.kode}`,
          });
        } else {
          res.status(500).send({
            message: "could not delete mahasiswa with kode " + req.params.kode,
          });
        }
      } else res.send({ message: `berhasil dihapus` });
    });
  },
  // getNilaiByNim: (req, res) => {
  //   mahasiswa.getNilaiByNim(req.params.nim, (err, data) => {
  //     if (err) {
  //       if (err.kind == "not_found") {
  //         res.status(404).send({
  //           message: `Not found mahasiswa with NIM : ${req.params.nim}.`,
  //         });
  //       } else {
  //         res.status(500).send({
  //           nilai: [],
  //         });
  //       }
  //     } else res.send(data);
  //   });
  // },
};
