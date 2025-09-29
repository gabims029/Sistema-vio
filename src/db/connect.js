 
const mysql = require("mysql2");
const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQLHOST || process.env.DB_HOST,
  user: process.env.MYSQLNAME || process.env.DB_USER,
  password: process.env.MYAQLPASSWORD || process.env.DB_PASSWORD,
  database: process.env.MYAQLPORT || 3306
});

module.exports = pool;
