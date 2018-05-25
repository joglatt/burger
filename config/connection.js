// Set up MySQL connection.
var mysql = require("mysql");

require("dotenv").config();

// Consider changing the connection to pool connection if there is time. In mysql npm
var connection = mysql.createConnection({
  host: process.env.host,
  port: 3306,
  user: process.env.user,
  password: process.env.pass,
  database: "burger_db"
});
// connect
// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
