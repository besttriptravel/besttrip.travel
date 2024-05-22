/**
 * @file /controllers/api/umrah/package-durations/get-umrah-package-duration.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 28 April, 2024
 * @update_date 28 April, 2024
 */

// dependencies
const { UmrahPackageDuration } = require('../../../../models');

// export get umrah package duration controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { id } = req.params;

        // get umrah package duration
        const umrahPackageDuration = await UmrahPackageDuration.findById(id);

        // check if umrah package duration not found
        if (!umrahPackageDuration) {
            return res.status(404).json({
                message: 'Umrah package duration not found',
            });
        }

        // send response
        return res.status(200).json({
            message: 'Fetched umrah package duration successfully',
            umrahPackageDuration,
        });
    } catch (error) {
        return next(error);
    }
};
