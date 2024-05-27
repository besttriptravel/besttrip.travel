/**
 * @file /middlewares/api/auth/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 27 May, 2024
 */

// export all middlewares
module.exports = {
    isAuthorized: require('./is-authorized'),
    isVerified: require('./is-verified'),
    isAllowed: require('./is-allowed'),
};
