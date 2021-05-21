'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getVat = async (vatData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('PPN');
        const vatList = await pool.request()
                            .input('bookcode', sql.NVarChar(100), vatData.bookcode)
                            .query(sqlQueries.getPPN);
        return vatList.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateVat = async (data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('PPN');
        const update = await pool.request()
                            .input('bookcode', sql.NVarChar(100), data.bookcode)
                            .input('pctTax', sql.Float(), data.pctTax)
                            .input('tiket', sql.NVarChar(100), data.tiket)
                            .query(sqlQueries.updatePPN);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getVat,
    updateVat
}