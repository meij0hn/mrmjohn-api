'use strict';

const pmtData = require('../data/Payment');

const updateKet = async (req, res, next) => {
    try {
        const data = req.body;
        const ketList = await pmtData.updateKet(data);
        if(Array.isArray(ketList) && ketList.length > 0 ) {
            res.json({
                result: ketList,
                success: true,
                error: null
            });    
        } else if(ketList.length == 0) {
            res.status(400).json({
                result: null,
                success: false,
                error: "Transno not found!"
            });    
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: ketList
            });    
        }        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


const getPaymentKet = async (req, res, next) => {
    try {
        const data = req.body;
        const ketList = await pmtData.getPaymentKet(data);
        if(Array.isArray(ketList) && ketList.length > 0 ) {
            res.json({
                result: ketList,
                success: true,
                error: null
            });    
        } else if(ketList.length == 0) {
            res.status(400).json({
                result: null,
                success: false,
                error: "Transno not found!"
            });    
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: ketList
            });    
        }        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    updateKet,
    getPaymentKet
}