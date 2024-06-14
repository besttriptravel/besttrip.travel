/**
 * @file controllers/dashboard/users/edit-user.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 14 June, 2024
 * @update_date 14 June, 2024
 */

// dependencies
const { User } = require('../../../models');

// export user view controller
module.exports = async (req, res) => {
    try {
        // get user id from request params
        const { id } = req.params;

        // get user
        const user = await User.findById(id);

        // check if user exists
        if (!user) {
            return res.redirect('/error/404');
        }

        // return rendered view
        return res.render('dashboard/users/user', {
            title: 'Edit User',
            user,
        });
    } catch (error) {
        return res.redirect('/error/500');
    }
};
