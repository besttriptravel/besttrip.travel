/**
 * @file /middlewares/settings/content/blog-posts/upload-blog-posts-banner.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 20 April, 2024
 * @update_date 22 April, 2024
 */

// dependencies
const fs = require('fs');
const path = require('path');
const { BlogPost } = require('../../../../models');

// export upload banner middleware
module.exports =
    (dir = '/offers') =>
    async (req, res, next) => {
        // get validated data
        const { id } = req.params || {};
        const { banner } = req.files || {};

        // check if id exists
        if (id) {
            // get blog post
            const blogPost = await BlogPost.findById(id);

            // check if blog post banner exists
            if (blogPost?.banner) {
                // delete previous banner
                fs.unlinkSync(path.join(__dirname, '../../../../public/', blogPost.banner));
            }
        }

        // prepare file path
        const bannerPath = path.join('uploads/', `${dir}/${Date.now()}_${banner.name}`);
        const uploadLogoPath = path.join(__dirname, '../../../../public/', bannerPath);

        // move file to upload path
        await banner.mv(uploadLogoPath);

        // set file path to request body
        req.files.banner.path = bannerPath;

        // proceed to next middleware
        return next();
    };