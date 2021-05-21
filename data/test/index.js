'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getAllocs = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('test');
        const allocList = await pool.request().query(sqlQueries.allocList);
        return allocList.recordset;
    } catch (error) {
        console.log(error.message);
        return error.message;
    }
}

module.exports = {
    getAllocs
}