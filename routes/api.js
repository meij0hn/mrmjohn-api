'use strict';

const express = require('express');
const allocControll = require('../controllers/allocControllers');
const vatControll = require('../controllers/vatControllers');
const cancelControll = require('../controllers/rollbackControllers');
const pmtControll = require('../controllers/pmtControllers');
const router = express.Router();

/**
 * @swagger
 * /api/allocs:
 *   get:
 *     summary: Get all allocations
 *     description: Retrieve all allocation records
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/allocs', allocControll.getAllAllocs);

/**
 * @swagger
 * /api/vat:
 *   post:
 *     summary: Get VAT information
 *     description: Retrieve VAT details based on provided criteria
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/vat', vatControll.getVat);

/**
 * @swagger
 * /api/updateVat:
 *   post:
 *     summary: Update VAT information
 *     description: Update VAT records with new data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: VAT updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/updateVat', vatControll.updateVat);

/**
 * @swagger
 * /api/cancel:
 *   get:
 *     summary: Get cancellation information
 *     description: Retrieve cancellation records and details
 *     responses:
 *       200:
 *         description: Successful response
 *       500:
 *         description: Internal server error
 */
router.get('/cancel', cancelControll.getCancel);

/**
 * @swagger
 * /api/RollbackCancel:
 *   post:
 *     summary: Rollback cancellation
 *     description: Rollback a previous cancellation action
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Cancellation rolled back successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/RollbackCancel', cancelControll.RollbackCancel);

/**
 * @swagger
 * /api/updateKet:
 *   post:
 *     summary: Update payment notes
 *     description: Update payment notes or comments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Payment notes updated successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/updateKet', pmtControll.updateKet);

/**
 * @swagger
 * /api/ketPmt:
 *   post:
 *     summary: Get payment notes
 *     description: Retrieve payment notes and information
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Successful response
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/ketPmt', pmtControll.getPaymentKet);

module.exports = {
    routes: router
}