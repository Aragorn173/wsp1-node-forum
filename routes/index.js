const express = require('express');
const router = express.Router();


const mysql = require('mysql2');
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
});
const promisePool = pool.promise();

router.get('/', async function (req, res, next) {
    const [rows] = await promisePool.query("SELECT * FROM al04forum");
    res.json({ rows });
});

res.render('index.njk', {
    rows: rows,
    title: 'Forum',
});

module.exports = router;
