/**
 * @file /middlewares/umrah/packages/upload-package-umrah-package-thumbnail.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 May, 2024
 * @update_date 14 May, 2024
 */

// dependencies
const fs = require('fs');
const path = require('path');
const { UmrahPackage } = require('../../../models');

// export umrah package umrah package thumbnail upload middleware
module.exports =
    (dir = '/umrah/package') =>
    async (req, res, next) => {
        // get validated data
        const { id } = req.params || {};
        const { umrahThumbnail } = req.files || {};

        // check if id exists
        if (id) {
            // get umrah package
            const umrahPackage = await UmrahPackage.findById(id);

            // check if umrah package umrah thumbnail exists
            if (umrahPackage?.umrahThumbnail) {
                // delete previous umrah thumbnail
                fs.unlinkSync(
                    path.join(__dirname, '../../../public/', umrahPackage.umrahThumbnail)
                );
            }
        }

        // prepare file path
        const umrahThumbnailPath = path.join(
            'uploads/',
            `${dir}/${Date.now()}_${umrahThumbnail.name}`
        );
        const uploadLogoPath = path.join(__dirname, '../../../public/', umrahThumbnailPath);

        // move file to upload path
        await umrahThumbnail.mv(uploadLogoPath);

        // set file path to request body
        req.files.umrahThumbnail.path = umrahThumbnailPath;

        // proceed to next middleware
        return next();
    };