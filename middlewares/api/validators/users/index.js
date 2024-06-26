/**
 * @file /middlewares/api/validators/users/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 08 April, 2024
 * @update_date 21 June, 2024
 */

// export user validators
module.exports = {
    validateUserId: require('./validate-user-id'),
    validateUser: require('./validate-user'),
    validatePassword: require('./validate-password'),
    validateUserSelf: require('./validate-user-self'),
    validatePasswordSelf: require('./validate-password-self'),
    validateRole: require('./validate-role'),
};
