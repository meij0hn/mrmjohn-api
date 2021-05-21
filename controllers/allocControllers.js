'use strict';

const eventData = require('../data/test');

const getAllAllocs = async (req, res, next) => {
    try {

        const allocList = await eventData.getAllocs();
        if(Array.isArray(allocList) ) {
            res.json({
                result: allocList,
                success: true,
                error: null
            });    
        } else {
            res.status(400).json({
                result: null,
                success: true,
                error: allocList
            });    
        }        
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    getAllAllocs
}