const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "azertyuiop",
  database: "Homer"
});
module.exports = connection;
