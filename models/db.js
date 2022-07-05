const mysql2 = require("mysql2");
const dbConfig = require("../config/db.config.js");

const connection = mysql2.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

connection.connect((error) => {
  if (error) throw error;
  console.log("sukses terkoneksi");
});
module.exports = connection;
