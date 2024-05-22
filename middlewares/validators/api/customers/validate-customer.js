/**
 * @file /middlewares/validators/customers/update-customer.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 03 April, 2024
 * @update_date 19 April, 2024
 */

// dependencies
const { customerSchema } = require('../../../../schemas/zod/customers');
const { zodErrorHandler } = require('../../../../handlers/errors');

// export validate customer middleware
module.exports = (req, res, next) => {
    // validate request body
    const { error, success } = customerSchema.safeParse(req.body);

    // check for errors
    if (!success) {
        // return error response
        return zodErrorHandler(res, error);
    }

    // proceed to next middleware
    return next();
};