const connection = require('../config/database');

const getALLUusers = async () => {
    const [results, fields] = await connection.query('SELECT * FROM Users ');
    return results;
}

module.exports = { getALLUusers }