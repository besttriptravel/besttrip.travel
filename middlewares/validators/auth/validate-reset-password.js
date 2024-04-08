/**
 * @file /middlewares/validators/validateResetPassword.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 08 April, 2024
 */

// dependencies
const { body, query } = require('express-validator');
const { expressValidator } = require('../../../handlers/errors');

// validate reset password
module.exports = [
    query('token').isJWT().withMessage('Token is required'),
    body('password')
        .isLength({ min: 8 })
        .withMessage('Password must be at least 6 characters long'),
    body('confirmPassword')
        .isLength({ min: 8 })
        .withMessage('Confirm password must be at least 6 characters long')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords do not match');
            }
            return true;
        }),
    expressValidator,
];
