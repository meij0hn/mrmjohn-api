'use strict';

const express = require('express');
const allocControll = require('../controllers/allocControllers');
const vatControll = require('../controllers/vatControllers');
const cancelControll = require('../controllers/rollbackControllers');
const router = express.Router();

router.get('/allocs', allocControll.getAllAllocs);
router.post('/vat', vatControll.getVat);
router.post('/updateVat', vatControll.updateVat);
router.get('/cancel', cancelControll.getCancel);
router.post('/RollbackCancel', cancelControll.RollbackCancel);

module.exports = {
    routes: router
}