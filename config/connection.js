// Set up MySQL connection.
var mysql = require("mysql");


// Consider changing the connection to pool connection if there is time. In mysql npm
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1337',
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
