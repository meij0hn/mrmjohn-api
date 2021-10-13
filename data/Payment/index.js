'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const updateKet = async (pmtData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Payment');
        const vatList = await pool.request()
                            .input('transno', sql.NVarChar(100), pmtData.transno)
                            .input('remarks', sql.NVarChar(225), pmtData.remarks)
                            .input('tiket', sql.NVarChar(100), pmtData.tiket)
                            .query(sqlQueries.updateKet);
        return vatList.recordset;
    } catch (error) {
        return error.message;
    }
}

const getPaymentKet = async (pmtData) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('Payment');
        const vatList = await pool.request()
                            .input('transno', sql.NVarChar(100), pmtData.transno)
                            .query(sqlQueries.getPaymentKet);
        return vatList.recordset;
    } catch (error) {
        return error.message;
    }
}


module.exports = {
    updateKet,
    getPaymentKet
}