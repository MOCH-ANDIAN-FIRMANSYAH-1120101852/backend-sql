const express = require("express");
const fishRouter = require("./routers/fish");
const ukuranRouter = require("./routers/ukuran");
const kualitasRouter = require("./routers/kualitas");
const cors = require("cors");
const app = express();
const port = 5000;

//MENERIMA REQ.BODY
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(
  cors({
    origin: "*",
  })
);

app.use(fishRouter);
app.use(ukuranRouter);
app.use(kualitasRouter);
app.listen(port, () => {
  console.log("server berjalan pada port" + port);
});
