const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "azertyuiop",
  database: "odyssey"
});
module.exports = connection;