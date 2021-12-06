var mysql = require('mysql');
const express = require('express');
var app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "hung2503",
  database: "EmployeeDB"
});

mysqlConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
app.get('/employees',(req,res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    });
})