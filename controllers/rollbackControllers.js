'use strict';

const e = require('express');
const cancelData = require('../data/RollbackCancel');

const getCancel = async (req, res, next) => {
    try {
        const bookcode = req.query.bookcode;
        const data = {"bookcode": bookcode}  
        const cancelList = await cancelData.getDataBook(data);
        if(Array.isArray(cancelList) && cancelList.length > 0 ) {
            res.json({
                result: cancelList,
                success: true,
                error: null
            });    
        } else if(cancelList.length == 0) {
            res.status(400).json({
                result: null,
                success: false,
                error: "Bookcode "+ bookcode + " not found!"
            });    
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: cancelList
            });    
        }        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const RollbackCancel = async (req, res, next) => {
    try {
        const data = req.body;
        const cancelList = await cancelData.getDataBook(data);
        
        if(cancelList.length == 0) {
            res.status(400).json({
                result: null,
                success: false,
                error: "Bookcode "+ data.bookcode + " not found!"
            });    
        } else if(cancelList[0].bookcodeExistsNotCancel == null) {
            
            const RollbackList = await cancelData.updateToRollbackCancel(data);
            if(Array.isArray(RollbackList) && RollbackList.length > 0 ) {
                res.json({
                    result: RollbackList,
                    success: true,
                    error: null
                });    
            } else if(RollbackList.length == 0) {
                res.status(400).json({
                    result: null,
                    success: false,
                    error: "Bookcode "+ RollbackList[0].bookcode + " not found!"
                });    
            } else {
                res.status(400).json({
                    result: null,
                    success: false,
                    error: RollbackList
                });    
            }        
        
        } else {
            res.status(400).json({
                result: null,
                success: false,
                error: "Sorry your unit has been booked by " + cancelList[0].bookcodeExistsNotCancel
            });    
        }
        
        
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getCancel,
    RollbackCancel
}