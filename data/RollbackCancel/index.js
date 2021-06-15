'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getDataBook = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('RollbackCancel');
        const vatList = await pool.request()
                            .input('bookcode', sql.NVarChar(100), data.bookcode)
                            .query(sqlQueries.getUnitCancelInfo);
        return vatList.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateToRollbackCancel = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('RollbackCancel');
        const vatList = await pool.request()
                            .input('bookcode', sql.NVarChar(100), data.bookcode)
                            .input('tiket', sql.NVarChar(100), data.tiket)
                            .query(sqlQueries.rollbackUnitCancel);
        return vatList.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    getDataBook,
    updateToRollbackCancel
}