const Pool = require('pg').Pool
const pool = new Pool({
    user:'postgres',
    password:'515340',
    host:'localhost',
    port:5432,
    database:"date_startaps"
})
pool.connect();
module.exports = pool