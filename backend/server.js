const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());

app.use(cors());

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "crud",
	port: "3307",
});

app.get("/", (req, res) => {
	const sql = "SELECT * FROM student";
	db.query(sql, (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.post("/create", (req, res) => {
	const sql = "INSERT INTO student (`Name`, `Email`) VALUES (?)";
	const value = [req.body.name, req.body.email];
	db.query(sql, [value], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.put("/update/:id", (req, res) => {
	const sql = "UPDATE student set `Name` = ?, `Email` = ? WHERE ID = ?";
	const value = [req.body.name, req.body.email];
	const id = req.params.id;

	db.query(sql, [...value, id], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.delete("/student/:id", (req, res) => {
	const sql = "DELETE FROM student where ID = ?";
	const id = req.params.id;

	db.query(sql, [id], (err, data) => {
		if (err) return res.json(err);
		return res.json(data);
	});
});

app.listen(8081, () => {
	console.log("Init project");
});
