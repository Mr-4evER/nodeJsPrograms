// const Pool = require("pg").Pool;

// const pool = new Pool({
//     user: "postgres",
//     password: "shivam4444",
//     database: "nodejs",
//     host: "localhost",
//     port: 5432
// });

// module.exports = pool;

const { Pool } = require('pg')
const pool = new Pool({
    user: "postgres",
    password: "shivam4444",
    database: "nodejs",
    host: "localhost",
    port: 5432
})
module.exports = pool;