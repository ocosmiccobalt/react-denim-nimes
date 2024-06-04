import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  database: 'my_app',
  user: 'root',
  password: '<my-password>'
});

export default pool;
