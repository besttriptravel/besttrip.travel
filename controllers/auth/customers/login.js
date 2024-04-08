/**
 * @file /controllers/auth/customers/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 08 April, 2024
 */

// dependencies
const { matchedData } = require('express-validator');
const { Customer } = require('../../../models');
const { comparePassword, generateToken } = require('../../../utils');

// export login customer controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { email, password } = matchedData(req);

        // check if customer exists
        const customer = await Customer.findOne({ email }).select('+password');

        if (!customer) {
            return res.status(400).json({
                message: 'Invalid email or password',
            });
        }

        // convert customer to object
        const customerObject = customer.toObject();

        // compare password
        const match = await comparePassword(password, customerObject.password);

        if (!match) {
            return res.status(400).json({
                message: 'Invalid email or password',
            });
        }

        // remove password from customer object
        delete customerObject.password;

        // generate token
        const token = generateToken(customerObject);

        // set token in response
        res.set('authorization', `Bearer ${token}`);

        // return response
        return res.status(200).json({
            message: 'Login successful',
        });
    } catch (error) {
        return next(error);
    }
};
