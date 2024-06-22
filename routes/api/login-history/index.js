/**
 * @file /routes/api/login-history/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 22 June, 2024
 * @update_date 22 June, 2024
 */

// dependencies
const express = require("express");

// express router
const router = express.Router();

// controllers
const {
  getHistory,
  getHistoryById,
  deleteHistory,
} = require("../../../controllers/api/login-history");

// middlewares
const { isAuthorized, isAllowed } = require("../../../middlewares/api/auth");

/**
 * @description check if user is authorized
 * @param {string} path - /api/history
 * @param {function} middleware - ['isAuthorized']
 * @returns {object} - router
 * @method USE
 */
router.use(isAuthorized);

/**
 * @description get all history
 * @param {string} path - /api/history
 * @param {function} middleware - ['isAllowed']
 * @param {function} controller - ['getHistory']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get("/", isAllowed(["admin"]), getHistory);

/**
 * @description get history by mongo id
 * @param {string} path - /api/history/:id
 * @param {function} middleware - ['isAllowed']
 * @param {function} controller - ['getHistoryById']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get(
  "/:id",
  isAllowed(["admin"]),
  validateLoginHistoryId,
  getHistoryById
);

/**
 * @description delete history by mongo id
 * @param {string} path - /api/history/:id
 * @param {function} middleware - ['isAllowed']
 * @param {function} controller - ['deleteHistory']
 * @returns {object} - router
 * @access private - ['admin']
 * @method DELETE
 */
router.delete("/:id", isAllowed(["admin"]), deleteHistory);

// export router
module.exports = router;
