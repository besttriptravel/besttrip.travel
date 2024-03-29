/**
 * @file /models/customer.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March 2024
 * @update_date 22 March 2024
 */

// dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const moment = require('moment');

// customer schema
const customerSchema = new mongoose.Schema(
    {
        customerID: {
            type: String,
            required: [true, 'Customer ID is required'],
            unique: [true, 'Customer ID already exists'],
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: [true, 'Email already exists'],
            lowercase: true,
        },
        phone: {
            type: String,
            required: [true, 'Phone is required'],
            unique: [true, 'Phone already exists'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            select: false,
        },
        isVerified: {
            type: Boolean,
            default: false,
        },
        dob: {
            type: Date,
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        country: {
            type: String,
        },
        postalCode: {
            type: String,
        },
        profileImage: {
            type: String,
        },
        flyerNumber: {
            type: String,
        },
        wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet',
        },
    },
    {
        timestamps: true,
    }
);

// hash password before saving
customerSchema.pre('save', async function (next) {
    try {
        // check if password is modified
        if (!this.isModified('password')) {
            return next();
        }

        // hash password
        this.password = await bcrypt.hash(this.password, 10);

        // generate incrementing customer ID
        const count = await this.constructor.countDocuments();
        this.customerID = `BTC${moment().format('YYYYMMDD')}${count + 1}`; // BTCYYYYMMDD0001

        return next();
    } catch (error) {
        return next(error);
    }
});

// export model
module.exports = mongoose.model('Customer', customerSchema);
