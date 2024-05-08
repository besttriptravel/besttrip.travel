/**
 * @file /controllers/umrah/extranets/get-umrah-extranet.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 25 April, 2024
 * @update_date 28 April, 2024
 */

// dependencies
const { UmrahExtranet } = require('../../../models');

// export get umrah extranet controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { id } = req.params;

        // get umrah extranet
        const umrahExtranet = await UmrahExtranet.findById(id);

        // check if umrah extranet exists
        if (!umrahExtranet) {
            return res.status(404).json({
                message: 'Umrah extranet package not found',
            });
        }

        // send response
        return res.status(200).json({
            message: 'Fetched umrah extranet package successfully',
            umrahExtranet,
        });
    } catch (error) {
        return next(error);
    }
};