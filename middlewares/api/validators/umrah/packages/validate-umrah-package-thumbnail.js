/**
 * @file
 * /middlewares/api/validators/umrah/packages/validate-umrah-package-tumbnail.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 May, 2024
 * @update_date 15 May, 2024
 */

// dependencies
const { DEFAULT_IMAGE_TYPES, ONE_MEGA_BYTE } = require('../../../../../constants');

// export umrah package tumbnail validator middleware
module.exports = async (req, res, next) => {
    // get thumbnail
    const { thumbnail } = req.files || {};

    // check if thumbnail is not provided
    if (!thumbnail) {
        return res.status(400).json({
            message: 'Please upload a thumbnail',
        });
    }

    // check if thumbnail is an array
    if (Array.isArray(thumbnail)) {
        return res.status(400).json({
            message: 'Please upload only one thumbnail',
        });
    }

    // check if thumbnail is not an image of type jpg, jpeg, png
    if (thumbnail && !DEFAULT_IMAGE_TYPES.includes(thumbnail.mimetype)) {
        return res.status(400).json({
            message: `Please upload a thumbnail of type ${DEFAULT_IMAGE_TYPES.join(', ')}`,
        });
    }

    // check if thumbnail size is greater than 1 MB
    if (thumbnail?.size > ONE_MEGA_BYTE) {
        return res.status(400).json({
            message: `Please upload a thumbnail of size less than ${(ONE_MEGA_BYTE / ONE_MEGA_BYTE).toFixed(2)} MB`,
        });
    }

    // proceed to next middleware
    return next();
};
