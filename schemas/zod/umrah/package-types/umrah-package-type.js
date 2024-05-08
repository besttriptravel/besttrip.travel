/**
 * @file /schemas/zod/umdah/package-types/umrah-package-type.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 28 April, 2024
 * @update_date 28 April, 2024
 */

// dependencies
const { z } = require('zod');
const { isMongoId } = require('validator');
const { UMRAH_PACKAGE_TYPE_STATUS } = require('../../../../constants');

// export umdah package type schema
module.exports = z
    .object({
        id: z
            .string({
                required_error: 'Id is required',
                invalid_type_error: 'Please provide a valid id',
            })
            .refine((id) => isMongoId(id), {
                message: 'Please provide a valid id',
            }),
        name: z
            .string({
                required_error: 'Name is required',
                invalid_type_error: 'Please provide a valid name',
            })
            .min(3, {
                message: 'Name must be at least 3 characters',
            })
            .max(255, {
                message: 'Name must be at most 255 characters',
            }),
        status: z
            .string({
                required_error: 'Status is required',
                invalid_type_error: 'Please provide a valid status',
            })
            .refine((status) => UMRAH_PACKAGE_TYPE_STATUS.includes(status), {
                message: 'Please provide a valid status',
            }),
    })
    .strict();