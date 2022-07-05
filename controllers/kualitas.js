const kualitas = require("../models/kualitas");

module.exports = {
  getKualitas: (req, res) => {
    kualitas.getKualitas((err, data) => {
      if (err) {
        res.status(500).send({
          message: err.message || " onok error",
        });
      } else {
        res.send(data);
      }
    });
  },
};
