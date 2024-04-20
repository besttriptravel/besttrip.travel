/**
 * @file /schemas/zo/auth/send-verification-email.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 14 April, 2024
 * @update_date 14 April, 2024
 */

// dependencies
const { z } = require('zod');

// export send verification email schema
module.exports = z
    .object({
        email: z
            .string({
                required_error: 'Email is required',
                invalid_type_error: 'Please enter a valid email address',
            })
            .email({
                message: 'Please enter a valid email address',
            }),
    })
    .strict();
