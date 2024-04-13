/**
 * @file /middlewares/validators/customers/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 03 April, 2024
 * @update_date 08 April, 2024
 */

// export all validators
module.exports = {
    validateCustomerId: require('./validate-customer-id'),
    validateCustomerWallet: require('./validate-customer-wallet'),
    validateCustomer: require('./validate-customer'),
    validateCustomerSelf: require('./validate-customer-self'),
    validateExistedCustomerAccount: require('./validate-existed-customer-account'),
};
