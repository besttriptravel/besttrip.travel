/**
 * @file /controllers/users/delete-user-by-self.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 08 April, 2024
 * @update_date 11 April, 2024
 */

// dependencies
const fs = require('fs');
const path = require('path');
const { User } = require('../../models');

// export delete user by self controller
module.exports = async (req, res, next) => {
    try {
        // get user id
        const { _id } = req.user;

        // delete user
        const user = await User.findById(_id);

        // check if user exists
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        // delete user
        await user.deleteOne();

        // delete user avatar
        if (user.avatar) {
            fs.unlinkSync(
                path.join(__dirname, `../../public/uploads/avatars/users/${user.avatar}`)
            );
        }

        // remove token from headers
        res.removeHeader('Authorization');

        // return response
        return res.status(200).json({
            message: 'Deleted user successfully',
            user,
        });
    } catch (error) {
        return next(error);
    }
};