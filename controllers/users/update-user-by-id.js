/**
 * @file /controllers/users/update-user-by-id.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 07 April, 2024
 * @update_date 07 April, 2024
 */

// dependencies
const { User } = require('../../models');

// export update user by mongo id controller
module.exports = async (req, res, next) => {
    try {
        // get user id
        const { id } = req.params;

        // check if user exists
        const user = await User.findById(id);

        // check if user exists
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
            });
        }

        // update user
        user.set(req.body);

        // save user
        await user.save();

        // return response
        return res.status(200).json({
            message: 'Updated user successfully',
            user,
        });
    } catch (error) {
        return next(error);
    }
};
