/**
 * @file /middlewares/api/validators/settings/content/hotel-offers/validate-hotel-offer-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 19 April, 2024
 * @update_date 07 May, 2024
 */

// dependencies
const { hotelOfferSchema } = require('../../../../../../schemas/zod/settings/content');
const { zodErrorHandler } = require('../../../../../../handlers/errors');

// export hotel offer id validator middleware
module.exports = (req, res, next) => {
    // validate request body
    const { error, success } = hotelOfferSchema.pick({ id: true }).safeParse(req.params);

    // check for errors
    if (!success) {
        // return error response
        return zodErrorHandler(res, error);
    }

    // proceed to next middleware
    return next();
};
