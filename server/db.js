const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "sharma1993",
  host: "localhost",
  database: "perntodo",
  port: 5432
});

module.exports = pool;
