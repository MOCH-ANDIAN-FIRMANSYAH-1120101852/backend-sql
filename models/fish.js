const db = require("./db");
// const cari = (arrData, nim) => {
//   ketemu = -1;
//   indeks = 0;
//   while (ketemu == -1 && indeks < arrData.length) {
//     if (arrData[indeks].nim == nim) {
//       ketemu = indeks;
//       return indeks;
//     }
//     indeks++;
//   }
//   return -1;
// };

module.exports = {
  insert: (newFish, result) => {
    db.query(
      "INSERT INTO `ikan`(`kode`, `nama`, `harga`, `ukuran_id`,`kualitas_id`) VALUES (?,?,?,?,?)",
      [
        null,
        newFish.nama,
        newFish.harga,
        newFish.ukuran_id,
        newFish.kualitas_id,
      ],
      (err, res) => {
        if (err) {
          console.log("error:", err);
          result(err, null);
          return;
        }
        result(null, { id: res.insertId, ...newFish });
      }
    );
  },
  getFish(result) {
    const query =
      "SELECT ikan.kode, ikan.nama,ikan.harga,ikan.kualitas_id,ikan.ukuran_id,kualitas.kualitas,ukuran.ukuran FROM ikan JOIN kualitas JOIN ukuran on ikan.ukuran_id = ukuran.id_ukuran AND ikan.kualitas_id = kualitas.kode_kualitas";
    db.query(query, (err, results) => {
      if (err) {
        console.log("error:", err);
        return;
      }

      result(null, results);
    });
  },
  getFishByKode: (kode, result) => {
    db.query(
      `SELECT ikan.kode, ikan.nama,ikan.harga,ikan.kualitas_id,ikan.ukuran_id,kualitas.kualitas,ukuran.ukuran FROM ikan JOIN kualitas JOIN ukuran on ikan.ukuran_id = ukuran.id_ukuran AND ikan.kualitas_id = kualitas.kode_kualitas WHERE ikan.kode = ${kode}`,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        if (res.length) {
          result(null, res[0]);
          return;
        }
        result({ kind: "tidak ditemukan" }, null);
      }
    );
  },
  update: (kode, fish, result) => {
    db.query(
      "UPDATE ikan SET nama= ?, harga=?, ukuran_id = ?, kualitas_id = ? WHERE kode=?",
      [fish.nama, fish.harga, fish.ukuran_id, fish.kualitas_id, kode],
      (err, res) => {
        if (err) {
          console.log("error:", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
        // console.log("update mahasiswa: ", { nim: nim, ...mahasiswa });
        result(null, { kode, ...fish });
      }
    );
  },
  delete: (kode, result) => {
    db.query("DELETE FROM ikan WHERE kode = ?", [kode], (err, res) => {
      if (err) {
        console.log("error:", err);
        result(null, err);
        return;
      }
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
      // console.log("deleted fish with kode : ", kode);
      result(null, res);
    });
  },
  // getNilaiByNim: (nim, result) => {
  //   try {
  //     Sql.query(
  //       `SELECT matakuliah.kdMk,matakuliah.matakuliah,nilai.dosen,nilai.semester,nilai.nilai
  //                     FROM mahasiswa,matakuliah,nilai
  //                     WHERE mahasiswa.nim=${nim} and nilai.nim=${nim}and nilai.kdMk=matakuliah.kdMk`,
  //       (err, res) => {
  //         result(null, res);
  //       }
  //     );
  //   } catch (error) {
  //     result(error, null);
  //   }
  // },
};
