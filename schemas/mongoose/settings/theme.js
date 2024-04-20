/**
 * @file /schemas/mongoose/settings/theme.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 20April, 2024
 * @update_date 20April, 2024
 */

// dependencies
const { Schema } = require('mongoose');
const { THEME_NAMES } = require('../../../constants');

// export theme settings schema
module.exports = new Schema(
    {
        key: {
            type: String,
            enum: THEME_NAMES,
            required: [true, 'Theme key is required'],
            unique: true,
        },
        illustration: {
            type: String,
            required: [true, 'Illustration is required'],
        },
        title: {
            type: String,
            required: [true, 'Title is required'],
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
        },
    },
    {
        timestamps: true,
    }
);
