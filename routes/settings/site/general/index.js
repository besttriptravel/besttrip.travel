/**
 * @file /routes/settings/site/general/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 April, 2024
 * @update_date 17 April, 2024
 */

// dependencies
const express = require('express');

// express router
const router = express.Router();

// controllers
const {
    getGeneralSettings,
    createGeneralSettings,
    updateGeneralSettings,
} = require('../../../../controllers/settings/site/general');

// middlewares
const { isAuthorized, isAllowed } = require('../../../../middlewares/auth');
const {
    validateGeneralSettings,
    validateGeneralSettingsFiles,
} = require('../../../../middlewares/validators/settings/site/general');
const { uploadGeneralSettingsFile } = require('../../../../middlewares/settings/site/general');

/**
 * @description get general settings
 * @param {string} path - '/settings/site/general'
 * @param {function} controller - ['getGeneralSettings']
 * @returns {object} - router
 * @access public
 * @method GET
 */
router.get('/', getGeneralSettings);

/**
 * @description create general settings
 * @param {string} path - '/settings/site/general'
 * @param {function} middleware - [
 * 'isAuthorized', 'isAllowed', 'validateGeneralSettingsFiles',
 * 'validateGeneralSettings', 'uploadGeneralSettingsFile
 * ]
 * @param {function} controller - ['createGeneralSettings']
 * @returns {object} - router
 * @access private
 * @method POST
 */
router.post(
    '/',
    isAuthorized,
    isAllowed(['admin']),
    validateGeneralSettingsFiles,
    validateGeneralSettings,
    uploadGeneralSettingsFile.logo('/logos'),
    uploadGeneralSettingsFile.favicon('/logos'),
    createGeneralSettings
);

/**
 * @description update general settings
 * @param {string} path - '/settings/site/general'
 * @param {function} middleware - [
 * 'isAuthorized', 'isAllowed', 'validateGeneralSettingsFiles',
 * 'validateGeneralSettings', 'uploadGeneralSettingsFile
 * ]
 * @param {function} controller - ['updateGeneralSettings']
 * @returns {object} - router
 * @access private
 * @method PATCH
 */
router.patch(
    '/',
    isAuthorized,
    isAllowed(['admin']),
    validateGeneralSettingsFiles,
    validateGeneralSettings,
    uploadGeneralSettingsFile.logo('/logos'),
    uploadGeneralSettingsFile.favicon('/logos'),
    updateGeneralSettings
);

// export router
module.exports = router;
