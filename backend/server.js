const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();

app.use(cors());

mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  databse: "crud",
});

app.get("/", (req, res) => {
  res.json("Backend connected");
});

app.listen(8081, () => {
  console.log("Init project");
});
