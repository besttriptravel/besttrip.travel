/**
 * @file /middlewares/api/umrah/packages/upload-package-gallery.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 May, 2024
 * @update_date 03 Jul, 2024
 */

// dependencies
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { UmrahPackage } = require('../../../../models');

// export umrah package gallery upload middleware
module.exports =
    (dir = '/umrah/package') =>
    async (req, res, next) => {
        let umrahPackage = {};

        // get validated data
        const { id } = req.params || {};
        const { extraThumbnails } = req.files || {};

        // check if extra thumbnails exists
        if (!extraThumbnails) {
            return next();
        }

        // check if id exists
        if (id) {
            // get umrah package
            umrahPackage = await UmrahPackage.findById(id);
        }

        // check if umrah package extra thumbnails exists
        if (umrahPackage?.extraThumbnails?.length > 0) {
            // delete previous extra thumbnails
            umrahPackage.extraThumbnails.forEach(
                (thumbnail) =>
                    thumbnail &&
                    fs.unlinkSync(
                        path.join(__dirname, '../../../public', thumbnail)
                    )
            );
        }

        // prepare file path
        const updateExtraThumbnails = extraThumbnails.map((thumbnail) => {
            const updatedThumbnail = { ...thumbnail };
            const thumbnailPath = path.join(
                '/uploads/',
                `${dir}/${uuidv4()}_${updatedThumbnail.name}`
            );
            const uploadLogoPath = path.join(
                __dirname,
                '../../../public',
                thumbnailPath
            );

            // move file to upload path
            updatedThumbnail.mv(uploadLogoPath);

            // set file path to thumbnail object
            updatedThumbnail.path = thumbnailPath;

            return updatedThumbnail;
        });

        // set file path to request body
        req.files.extraThumbnails = updateExtraThumbnails;

        // proceed to next middleware
        return next();
    };
