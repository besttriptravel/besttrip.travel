/**
 * @file /controllers/customers/get-customer-by-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 29 March, 2024
 * @update_date 08 April, 2024
 */

// dependencies
const { matchedData } = require('express-validator');
const { Customer } = require('../../models');

// export get customer by mongo id controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { id } = matchedData(req);

        // get customer
        const customer = await Customer.findById(id);

        // check if customer exists
        if (!customer) {
            return res.status(404).json({
                message: 'Customer not found',
            });
        }

        // return response
        return res.status(200).json({
            message: 'Fetched customer successfully',
            customer,
        });
    } catch (error) {
        return next(error);
    }
};
