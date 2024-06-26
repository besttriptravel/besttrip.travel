/**
 * @file /controllers/api/settings/site/policy/get-policy.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 16 April, 2024
 * @update_date 19 April, 2024
 */

// dependencies
const { PolicySettings } = require('../../../../../models');

// export get policy controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { key } = req.params;

        // get policy
        const policy = await PolicySettings.findOne({ key });

        // check if policy exists
        if (!policy) {
            return res.status(404).json({
                message: `No ${key.split('-').join(' ')} found`,
            });
        }
        // return response
        return res.status(200).json({
            message: `Fetched ${key.split('-').join(' ')} successfully`,
            policy,
        });
    } catch (error) {
        return next(error);
    }
};
