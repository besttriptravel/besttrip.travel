/**
 * @file /controllers/customers/delete-customer-by-self.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 07 April, 2024
 * @update_date 07 April, 2024
 */

// dependencies
const { Customer } = require('../../models');

// export delete customer by self controller
module.exports = async (req, res, next) => {
    try {
        // get customer id
        const { id } = req.user;

        // get customer
        const customer = await Customer.findById(id);

        // check if customer exists
        if (!customer) {
            return res.status(404).json({
                message: 'Customer not found',
            });
        }

        // delete customer
        await customer.deleteOne();

        // return response
        return res.status(200).json({
            message: 'Deleted customer successfully',
            customer,
        });
    } catch (error) {
        return next(error);
    }
};
