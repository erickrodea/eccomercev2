const express = require("express");
const mysql = require("mysql2"); // Use mysql2 instead of mysql
const cors = require("cors");
const port = 3001;

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  database: "ecom",
  user: "root",
  password: "password",
});

app.get("/", (req, res) => {
  return res.json("from backend side");
});

app.get("/products", (req, res) => {
  const sql = "SELECT * FROM Products";
  db.query(sql, (error, data) => {
    if (error) return res.json(error);
    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`listening on(http://localhost:${port})`);
});

module.exports = db;
