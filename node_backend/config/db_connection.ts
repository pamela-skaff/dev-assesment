var mysql = require('mysql');

var con = mysql.createConnection({
  host: process.env.HOST || "localhost",
  database: process.env.DATABASE || "perlego_test_db",
  user: process.env.USER || "root",
  password: process.env.PASSWORD || "Password@123"
});

con.connect(function(err: Error) {
  if (err) throw err;
  console.log("Connected!");
});

 module.exports = con;
 