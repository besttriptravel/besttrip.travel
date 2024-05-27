/**
 * @file /middlewares/auth/is-authorized.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 27 May, 2024
 */

// dependencies
const { env } = require('../../config');
const { User, Customer } = require('../../models');
const { verifyToken, generateToken } = require('../../utils');

// authourize user
module.exports = async (req, res, next) => {
    // get authorization from header
    const authorization = req.header('authorization') || req.cookies.token;

    // check if authorization is not exist and api is frontend
    if (!authorization && res.locals.api === 'frontend') {
        return res.render('errors/401');
    }

    // check if authorization is not exist and api is backend
    if (!authorization && res.locals.api === 'backend') {
        return res.status(401).json({
            message: 'Unauthorized',
        });
    }

    // get token
    const token = authorization.replace('Bearer ', '');

    try {
        let user;

        // verify token
        const payload = verifyToken(token);

        // check if user exists based on role by id, email, and status
        if (payload.user.role === 'customer') {
            user = await Customer.findOne({
                _id: payload.user._id,
                email: payload.user.email,
                status: 'active',
            });
        } else {
            user = await User.findOne({
                _id: payload.user._id,
                email: payload.user.email,
                status: 'active',
            });
        }

        // check if user is not exist and api is frontend
        if (!user && res.locals.api === 'frontend') {
            return res.render('errors/401');
        }

        // check if user is not exist and api is backend
        if (!user && res.locals.api === 'backend') {
            return res.status(401).json({
                message: 'Unauthorized',
            });
        }

        // generate token
        const newToken = generateToken(user);

        // set token in response
        res.set('authorization', `Bearer ${newToken}`);

        // set cookie in response
        res.cookie('token', newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: env.JWT_EXPIRY,
        });

        // set token in request
        req.token = newToken;

        // set user in request
        req.user = user.toObject();

        // proceed to next middleware
        return next();
    } catch (error) {
        return next(error);
    }
};
