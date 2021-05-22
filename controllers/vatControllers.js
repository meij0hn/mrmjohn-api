'use strict';

const e = require('express');
const vatData = require('../data/PPN');

const getVat = async (req, res, next) => {
    try {
        const data = req.body;
        const vatList = await vatData.getVat(data);
        if(Array.isArray(vatList) && vatList.length > 0 ) {
            res.json({
                result: vatList,
                success: true,
                error: null
            });    
        } else if(vatList.length == 0) {
            res.status(400).json({
                result: null,
                success: false,
                error: "Bookcode not found!"
            });    
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: vatList
            });    
        }        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateVat = async (req, res, next) => {
    try {
        const data = req.body;
        const vatList = await vatData.getVat(data);
        if(Array.isArray(vatList) && vatList.length > 0 ) {
            const updated = await vatData.updateVat(data);
            const vatListAfter = await vatData.getVat(data);
            if(updated == null) {
                res.json({
                    result: {
                        message: "Successfully Update Data!",
                        data : vatListAfter
                    },
                    success: true,
                    error: null
                });
            } else {
                res.status(400).json({
                    result: null,
                    success: true,
                    error: updated
                });
            }
            
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: "Bookcode not found!"
            });
        }
        
        
                     
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getVat,
    updateVat
}