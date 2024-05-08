/**
 * @file /controllers/umrah/package-types/create-umrah-package-type.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 28 April, 2024
 * @update_date 28 April, 2024
 */

// dependencies
const { UmrahPackageType } = require('../../../models');

// export create umrah package type controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { days, nights, status } = req.body;

        // create umrah package type
        const umrahPackageType = new UmrahPackageType({
            days,
            nights,
            status,
        });

        // save umrah package type
        await umrahPackageType.save();

        // send response
        return res.status(201).json({
            message: 'Created umrah package type successfully',
            umrahPackageType,
        });
    } catch (error) {
        return next(error);
    }
};