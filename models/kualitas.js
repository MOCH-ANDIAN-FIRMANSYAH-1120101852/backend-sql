const db = require("./db");

module.exports = {
  getKualitas(result) {
    const query = "SELECT * FROM kualitas";
    db.query(query, (err, results) => {
      if (err) {
        console.log("error:", err);
        return;
      }

      result(null, results);
    });
  },
};
