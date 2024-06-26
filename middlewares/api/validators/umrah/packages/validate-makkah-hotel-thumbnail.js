/**
 * @file
 * /middlewares/api/validators/umrah/packages/validate-makkah-hotel-tumbnail.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 May, 2024
 * @update_date 15 May, 2024
 */

// dependencies
const { DEFAULT_IMAGE_TYPES, ONE_MEGA_BYTE } = require('../../../../../constants');

// export umrah package makkah hotel tumbnail validator middleware
module.exports = async (req, res, next) => {
    // get makka hotel thumbnail
    const { makkahHotelThumbnail } = req.files || {};

    // check if makka hotel thumbnail is not provided
    if (!makkahHotelThumbnail) {
        return res.status(400).json({
            message: 'Please upload a thumbnail of makkah hotel',
        });
    }

    // check if makka hotel thumbnail is an array
    if (Array.isArray(makkahHotelThumbnail)) {
        return res.status(400).json({
            message: 'Please upload only one thumbnail of makkah hotel',
        });
    }

    // check if makka hotel thumbnail is not an image of type jpg, jpeg, png
    if (makkahHotelThumbnail && !DEFAULT_IMAGE_TYPES.includes(makkahHotelThumbnail.mimetype)) {
        return res.status(400).json({
            message: `Please upload a thumbnail of makkah hotel of type ${DEFAULT_IMAGE_TYPES.join(', ')}`,
        });
    }

    // check if makka hotel thumbnail size is greater than 1 MB
    if (makkahHotelThumbnail?.size > ONE_MEGA_BYTE) {
        return res.status(400).json({
            message: `Please upload a thumbnail of makkah hotel of size less than ${(ONE_MEGA_BYTE / ONE_MEGA_BYTE).toFixed(2)} MB`,
        });
    }

    // proceed to next middleware
    return next();
};
