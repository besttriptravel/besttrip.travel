/**
 * @file /controllers/auth/register.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 07 April, 2024
 */

// dependencies
const { welcome } = require('../../../mails');
const { Customer } = require('../../../models');
const { generateToken, sendEmail } = require('../../../utils');

// export register a new customer controller
module.exports = async (req, res, next) => {
    try {
        // get customer input
        const { name, email, phone, password } = req.body;

        // check if customer already exists
        const customer = await Customer.findOne({ email });

        if (customer) {
            return res.status(400).json({
                message: 'Customer already exists',
            });
        }

        // create new customer
        const newCustomer = new Customer({
            name,
            email,
            phone,
            password,
            wallet: {
                balance: 0,
            },
        });

        // save customer
        await newCustomer.save();

        // generate token
        const token = generateToken(newCustomer.toObject());

        // send mail
        const info = welcome({ user: newCustomer.toObject(), token });
        await sendEmail(info.to, info.subject, info.text, info.html, info.attachments);

        // return response
        return res.status(201).json({
            message: 'Customer created successfully',
            token,
        });
    } catch (error) {
        return next(error);
    }
};