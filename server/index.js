const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "Raunak@1234",
  database: "details",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phoneno = req.body.phoneno;

  db.query(
    "INSERT INTO employees (name,email, phoneno) VALUES (?,?,?)",
    [name, email, phoneno],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


app.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM employees WHERE id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
app.listen(3002, () => {
  console.log("Yey, your server is running on port 3002");
});
