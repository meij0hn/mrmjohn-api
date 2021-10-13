'use strict';

const express = require('express');
const allocControll = require('../controllers/allocControllers');
const vatControll = require('../controllers/vatControllers');
const cancelControll = require('../controllers/rollbackControllers');
const pmtControll = require('../controllers/pmtControllers');
const router = express.Router();

router.get('/allocs', allocControll.getAllAllocs);
router.post('/vat', vatControll.getVat);
router.post('/updateVat', vatControll.updateVat);
router.get('/cancel', cancelControll.getCancel);
router.post('/RollbackCancel', cancelControll.RollbackCancel);
router.post('/updateKet', pmtControll.updateKet);
router.post('/ketPmt', pmtControll.getPaymentKet);

module.exports = {
    routes: router
}