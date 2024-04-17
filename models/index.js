/**
 * @file /models/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 17 April, 2024
 */

// export all models
module.exports = {
    User: require('./user'),
    Token: require('./token'),
    Customer: require('./customer'),
    GeneralSettings: require('./settings/site/general-settings'),
    ContactSettings: require('./settings/site/contact-settings'),
    PolicySettings: require('./settings/site/policy-settings'),
    MetaSettings: require('./settings/site/meta-settings'),
};
