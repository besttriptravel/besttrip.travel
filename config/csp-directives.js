/**
 * @file config/csp-directives.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 03 June, 2024
 * @update_date 03 June, 2024
 */

// dependencies
const { INLINE, SELF, EVAL } = require('express-csp-header');

// content security policy directives
const CSP_DIRECTIVES = {
    directives: {
        'default-src': [SELF],
        'script-src': [
            SELF,
            INLINE,
            EVAL,
            'https://www.googletagmanager.com',
            'https://www.google-analytics.com',
        ],
        'style-src': [SELF, INLINE, 'https://fonts.googleapis.com'],
        'img-src': [SELF, 'data: https://www.google-analytics.com'],
        'font-src': [SELF, 'https://fonts.gstatic.com'],
        'connect-src': [SELF, 'https://www.google-analytics.com'],
        'frame-src': [SELF, 'https://www.googletagmanager.com'],
    },
};

// export content security policy directives
module.exports = { CSP_DIRECTIVES };
