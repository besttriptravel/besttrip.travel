/**
 * @file /utils/prepare-form-data.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 06 April, 2024
 * @update_date 06 April, 2024
 */

const fileUploader = require('./file-uploader');

// prepare form data
module.exports = async (req, res, next) => {
    try {
        const { logo, favicon, title, description } = req.body;

        // check if logo is not empty
        if (logo) {
            req.body.logo = await fileUploader(logo);
        }

        // check if favicon is not empty
        if (favicon) {
            req.body.favicon = await fileUploader(favicon);
        }

        // prepare data
        req.body = {
            ...req.body,
            title: title[0],
            description: description[0],
        };

        // return next
        return next();
    } catch (error) {
        return next(error);
    }
};
