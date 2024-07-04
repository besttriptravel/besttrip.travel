/**
 * @file /mails/welcome.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 18 March, 2024
 * @update_date 03 June, 2024
 */

// dependencies
const fs = require('fs');
const ejs = require('ejs');
const { env } = require('../config');

// export welcome mail
module.exports = ({ user, token }) => {
    let redirectTo;
    const appUrl =
        env.NODE_ENV === 'development'
            ? `${env.APP_URL}:${env.PORT}`
            : env.APP_URL;

    // read template file
    const template = fs.readFileSync(
        `${__dirname}/../templates/email/welcome-message.ejs`,
        'utf-8'
    );

    // set redirect url
    if (user.role === 'customer') {
        redirectTo = `${appUrl}/api/auth/customers/verify-email?token=${token}`;
    } else {
        redirectTo = `${appUrl}/dashboard/auth/verify-email?token=${token}`;
    }

    // compile template
    const html = ejs.render(template, {
        title: 'Welcome to Best Trip',
        company: {
            name: env.APP_NAME,
            address: '123, Best Trip Street, Best Trip City',
            phone: '+1234567890',
            email: env.EMAIL_FROM,
            website: `${appUrl}`,
        },
        user,
        redirectTo,
    });

    // attachments
    const attachments = [
        {
            filename: 'favicon.ico',
            path: `${__dirname}/../public/assets/media/logos/favicon.ico`,
            cid: 'favicon',
        },
        {
            filename: 'logo-1.svg',
            path: `${__dirname}/../public/assets/media/email/logo-1.svg`,
            cid: 'logo',
        },
        {
            filename: 'icon-positive-vote-1.svg',
            path: `${__dirname}/../public/assets/media/email/icon-positive-vote-1.svg`,
            cid: 'positiveVote',
        },
        {
            filename: 'icon-linkedin.svg',
            path: `${__dirname}/../public/assets/media/email/icon-linkedin.svg`,
            cid: 'linkedin',
        },
        {
            filename: 'icon-dribbble.svg',
            path: `${__dirname}/../public/assets/media/email/icon-dribbble.svg`,
            cid: 'dribbble',
        },
        {
            filename: 'icon-facebook.svg',
            path: `${__dirname}/../public/assets/media/email/icon-facebook.svg`,
            cid: 'facebook',
        },
        {
            filename: 'icon-twitter.svg',
            path: `${__dirname}/../public/assets/media/email/icon-twitter.svg`,
            cid: 'twitter',
        },
    ];

    // return mail options
    return {
        to: user?.email,
        subject: `Welcome to ${env.APP_NAME}`,
        text: `Welcome to ${env.APP_NAME}, ${user?.name}. Please verify your email by clicking the link below.`,
        html,
        attachments,
    };
};
