/**
 * @file /routes/api/wallets/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 24 June, 2024
 * @update_date 24 June, 2024
 */

// dependencies
const express = require("express");

// express router
const router = express.Router();

// controllers
const {
  getWallets,
  getWallet,
  createWallet,
  updateWallet,
  deleteWallet,
} = require("../../../controllers/api/wallets");

// middlewares
const { isAuthorized, isAllowed } = require("../../../middlewares/api/auth");
const {
  validateWalletId,
  validateWallet,
} = require("../../../middlewares/api/validators/wallets");

/**
 * @description check if user is authorized
 * @param {string} path - /api/wallets
 * @param {function} middleware - ['isAuthorized']
 * @returns {object} - router
 * @method USE
 */
router.use(isAuthorized);

/**
 * @description get all wallets
 * @param {string} path - /api/wallets/all
 * @param {function} middleware - ['isAllowed']
 * @param {function} controller - ['getWallets']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get("/all", isAllowed(["admin"]), getWallets);

/**
 * @description get wallet by mongo id
 * @param {string} path - /api/wallets?user=_id_or_customer=_id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateWalletId']
 * @param {function} controller - ['getWallet']
 * @returns {object} - router
 * @access private - ['admin']
 * @method GET
 */
router.get("/", isAllowed(["admin"]), validateWalletId, getWallet);

/**
 * @description create a new wallet
 * @param {string} path - /api/wallets
 * @param {function} middleware - ['isAuthorized', 'isAllowed']
 * @param {function} validator - ['validateWallet']
 * @param {function} controller - ['createWallet']
 * @returns {object} - router
 * @access private - ['admin']
 * @method POST
 */
router.post("/", isAllowed(["admin"]), validateWallet, createWallet);

/**
 * @description update wallet by mongo id
 * @param {string} path - /api/wallets?user=_id_or_customer=_id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateWalletId', 'validateWallet']
 * @param {function} controller - ['updateWallet']
 * @returns {object} - router
 * @access private - ['admin']
 * @method PATCH
 */
router.patch(
  "/",
  isAllowed(["admin"]),
  validateWalletId,
  validateWallet,
  updateWallet
);

/**
 * @description delete wallet by mongo id
 * @param {string} path - /api/wallets?user=_id_or_customer=_id
 * @param {function} middleware - ['isAllowed']
 * @param {function} validator - ['validateWalletId']
 * @param {function} controller - ['deleteWallet']
 * @returns {object} - router
 * @access private - ['admin']
 * @method DELETE
 */
router.delete("/", isAllowed(["admin"]), validateWalletId, deleteWallet);

// export
module.exports = router;
