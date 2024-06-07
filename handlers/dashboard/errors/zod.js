/**
 * @file /handlers/dashboard/errors/zod.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 04 June, 2024
 * @update_date 04 June, 2024
 */

// export zod error handler
module.exports = (res, zodErr) => {
    // parse errors from zod
    const errors = zodErr.errors.map((err) => ({
        field: err.path.join(', '),
        keys: err.keys?.join(', '),
        message: err.message,
    }));

    req.
};
