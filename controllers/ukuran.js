const ukuran = require("../models/ukuran");
module.exports = {
  getUkuran: (req, res) => {
    ukuran.getUkuran((err, data) => {
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
