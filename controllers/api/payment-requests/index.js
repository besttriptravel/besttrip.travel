/**
 * @file /controllers/api/payment-requests/index.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 20 April, 2024
 * @update_date 14 June, 2024
 */

// export payment requests controllers
module.exports = {
    getPaymentRequests: require('./get-payment-requests'),
    getPaymentRequest: require('./get-payment-request'),
    getPaymentRequestsByStatus: require('./get-payment-requests-by-status'),
    createPaymentRequest: require('./create-payment-request'),
    updatePaymentRequest: require('./update-payment-request'),
    deletePaymentRequest: require('./delete-payment-request'),
};
