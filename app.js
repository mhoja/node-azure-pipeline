const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 5050;

const pool = new Pool({
    user: 'username',
    host: 'host',
    database: 'database',
    password: 'password',
    port: 5432,
});

app.get('/', async(req, res) => {
    try {
        const result = await pool.query('SELECT * FROM bb_users WHERE id=197');
        res.json(result.rows);
    } catch (error) {
        console.error('Error executing query', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});