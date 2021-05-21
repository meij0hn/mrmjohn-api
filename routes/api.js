'use strict';

const express = require('express');
const allocControll = require('../controllers/allocControllers');
const vatControll = require('../controllers/vatControllers');
const router = express.Router();

router.get('/allocs', allocControll.getAllAllocs);
router.post('/vat', vatControll.getVat);
router.post('/updateVat', vatControll.updateVat);

module.exports = {
    routes: router
}