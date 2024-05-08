/**
 * @file /controllers/settings/content/exclusive-offers/delete-exclusive-offer.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 19 April, 2024
 * @update_date 19 April, 2024
 */

// dependencies
const { ExclusiveOffer } = require('../../../../models');

// export delete exclusive offer controller
module.exports = async (req, res, next) => {
    try {
        const { id } = req.params;

        // get exclusive offer
        const exclusiveOffer = await ExclusiveOffer.findById(id);

        // check if exclusive offer exists
        if (!exclusiveOffer) {
            return res.status(404).send({
                message: 'Exclusive offer not found',
            });
        }

        // delete exclusive offer
        await exclusiveOffer.deleteOne();

        // send response
        return res.send({
            message: 'Deleted exclusive offer successfully',
            exclusiveOffer,
        });
    } catch (error) {
        return next(error);
    }
};