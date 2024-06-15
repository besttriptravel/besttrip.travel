/**
 * @file routes/dashboard/login-history/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 15 June, 2024
 * @update_date 15 June, 2024
 */

// dependencies
const express = require('express');

// express router
const router = express.Router();

// controllers
const { viewLoginHistory } = require('../../../controllers/dashboard/login-history');

// middlewares
const { isAuthorized } = require('../../../middlewares/dashboard/auth');

/**
 * @description check if user is authorized
 * @param {string} path - '/dashboard/login-history'
 * @param {function} middleware - ['isAuthorized']
 * @returns {object} - router
 * @method USE
 */
router.use(isAuthorized);

/**
 * @description - umrah bookings view route
 * @param {string} path - '/dashboard/login-history'
 * @param {function} controller - ['viewLoginHistory']
 * @returns {object} - router
 * @access private - ['all']
 * @method GET
 */
router.get('/', viewLoginHistory);

// export router
module.exports = router;
