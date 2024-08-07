/**
 * @file /controllers/api/settings/site/meta/update-meta-settings.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 17 April, 2024
 * @update_date 03 Jul, 2024
 */

// dependencies
const { MetaSettings } = require('../../../../../models');

// export update meta settings controller
module.exports = async (req, res, next) => {
    try {
        // get validated data
        const { id } = req.params;
        const { name, content } = req.body;

        // find the existing meta settings
        const metaSetting = await MetaSettings.findOne({ _id: id });

        // check if meta settings exists
        if (!metaSetting) {
            return res.status(404).json({
                message: 'Meta settings not found',
            });
        }

        // update meta settings
        metaSetting.set({ name, content });

        // save meta settings
        await metaSetting.save();

        // return response
        return res.status(200).json({
            message: 'Updated meta settings successfully',
            metaSetting,
        });
    } catch (error) {
        return next(error);
    }
};
