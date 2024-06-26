/**
 * @file controllers/dashboard/settings/content/exclusive-offers/view-exclusive-offers.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 15 June, 2024
 * @update_date 15 June, 2024
 */

// dependencies
const { ExclusiveOffer } = require('../../../../../models');

// export exclusive offers view controller
module.exports = async (req, res) => {
    try {
        // get exclusive offers
        const exclusiveOffers = await ExclusiveOffer.find();

        // render exclusive offers view
        return res.render('dashboard/settings/content/exclusive-offers', {
            title: 'Exclusive Offers',
            user: req.user,
            exclusiveOffers,
        });
    } catch (error) {
        return res.redirect('/error/500');
    }
};
