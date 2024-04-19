/**
 * @file /controllers/settings/content/exclusive-offers/get-exclusive-offers.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 19 April, 2024
 * @update_date 19 April, 2024
 */

// dependencies
const { ContentExclusiveOffers } = require('../../../../models');

// export update exclusive offer controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { id } = req.params;
        const { link, status } = req.body;

        // get exclusive offer
        const exclusiveOffer = await ContentExclusiveOffers.findById(id);

        // check if exclusive offer exists
        if (!exclusiveOffer) {
            return res.status(404).send({
                message: 'Exclusive offer not found',
            });
        }

        // update exclusive offer
        exclusiveOffer.set({
            link,
            status,
        });

        // save exclusive offer
        await exclusiveOffer.save();

        // send response
        return res.send({
            message: 'Updated exclusive offer successfully',
            exclusiveOffer,
        });
    } catch (error) {
        return next(error);
    }
};
