const db = require("./db");

module.exports = {
  getUkuran(result) {
    const query = "SELECT * FROM ukuran";
    db.query(query, (err, results) => {
      if (err) {
        console.log("error:", err);
        return;
      }

      result(null, results);
    });
  },
};
