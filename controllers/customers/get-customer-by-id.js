/**
 * @file /controllers/customers/get-customer-by-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 29 March, 2024
 * @update_date 29 March, 2024
 */

// dependencies
const { Customer } = require('../../models');
const { generateToken } = require('../../utils');

// get customer by mongo id
const getCustomerById = async (req, res, next) => {
    try {
        // get customer id
        const { id } = req.params;

        // get customer
        const customer = await Customer.findById(id).populate('wallet');

        // generate token
        const token = generateToken(req.user);

        // return response
        return res.status(200).json({
            customer,
            token,
        });
    } catch (error) {
        return next(error);
    }
};

// export controller
module.exports = getCustomerById;
