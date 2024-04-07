/**
 * @file /controllers/customers/update-customer-by-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 29 March, 2024
 * @update_date 29 March, 2024
 */

// dependencies
const { Customer } = require('../../models');

// export update customer by mongo id controller
module.exports = async (req, res, next) => {
    try {
        // get customer id
        const { id } = req.params;

        // get the wallet object from the request body
        const { wallet } = req.body;

        // check if customer exists
        const customer = await Customer.findById(id);

        // check if customer exists
        if (!customer) {
            return res.status(404).json({
                message: 'Customer not found',
            });
        }

        // calculate wallet balance based on transaction type
        if (wallet) {
            switch (wallet.type) {
                case 'top-up':
                    customer.wallet.balance += wallet.balance;
                    break;
                case 'deduct':
                    customer.wallet.balance -= wallet.balance;
                    break;
                default:
                    break;
            }
        }

        // update customer
        customer.set({
            ...req.body,
            wallet: {
                ...req.body.wallet,
                balance: customer.wallet.balance,
            },
        });

        // save customer
        await customer.save();

        // return response
        return res.status(200).json({
            message: 'Updated customer successfully',
            customer,
        });
    } catch (error) {
        return next(error);
    }
};
