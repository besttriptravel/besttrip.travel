/**
 * @file /middlewares/settings/themes/upload-theme-settings-file.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 20 April, 2024
 * @update_date 20 April, 2024
 */

// dependencies
const fs = require('fs');
const path = require('path');
const { ThemeSettings } = require('../../../models');

// export upload illustration middleware
module.exports =
    (dir = '/themes') =>
    async (req, res, next) => {
        // get validated data
        const { key } = req.body;
        const { illustration } = req.files;

        // get theme settings
        const themeSettings = await ThemeSettings.findOne({ key });

        // check if illustration exists
        if (themeSettings?.illustration) {
            // delete previous illustration
            fs.unlinkSync(path.join(__dirname, '../../../../public/', themeSettings.illustration));
        }

        // prepare file path
        const illustrationPath = path.join('uploads/', `${dir}/${Date.now()}_${illustration.name}`);
        const uploadIllustrationPath = path.join(
            __dirname,
            '../../../../public/',
            illustrationPath
        );

        // move file to upload path
        await illustration.mv(uploadIllustrationPath);

        // set file path to request body
        req.files.illustration.path = illustrationPath;

        // proceed to next middleware
        return next();
    };
