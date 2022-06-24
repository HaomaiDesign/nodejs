const mysql = require('mysql');

var con = mysql.createConnection({
  host: "asiaorientaldbsingle.mysql.database.azure.com",
  user: "asiaorientaladm@asiaorientaldbsingle",
  password: "A$1aOriental",
  database: "asiaorientaldb"
});

con.connect((err) => {
  if (err) throw err;
  con.query("SELECT * FROM users", (err, result, fields) => {
    if (err) throw err;
    console.log(result);
  });
});