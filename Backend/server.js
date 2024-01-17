const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  return res.json("front");
});

app.listen(8081, () => {
  console.log("listen");
});
