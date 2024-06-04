/**
 * @file /middlewares/api/validators/settings/content/blog-posts/validate-blog-post-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 20 April, 2024
 * @update_date 08 May, 2024
 */

// dependencies
const { blogPostSchema } = require('../../../../../../schemas/zod/settings/content');
const { zodErrorHandler } = require('../../../../../../handlers/api/errors');

// export blog post id validator middleware
module.exports = (req, res, next) => {
    // validate request body
    const { error, success } = blogPostSchema.pick({ id: true }).safeParse(req.params);

    // check for errors
    if (!success) {
        // return error response
        return zodErrorHandler(res, error);
    }

    // proceed to next middleware
    return next();
};
