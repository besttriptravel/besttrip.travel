/**
 * @file /controllers/api/users/create-user.js
 * @project best-trip
 * @version 0.0.0
 * @author best-trip
 * @date 19 June, 2024
 * @update_date 24 June, 2024
 */

// dependencies
const { USER_DEFAULT_PASSWORD } = require("../../../constants");
const { welcome } = require("../../../mails");
const { User, Token } = require("../../../models");
const { generateToken, sendEmail } = require("../../../utils");

// export register a new user controller
module.exports = async (req, res, next) => {
  try {
    // get validated data
    const { name, email, phone, role } = req.body;

    // check if user already exists
    const user = await User.findOne({ email });

    // check if user already exists
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // create new user
    const newUser = new User({
      name,
      email,
      phone,
      password: USER_DEFAULT_PASSWORD,
      role,
    });

    // delete existing expired tokens
    await Token.deleteMany({
      user: newUser._id,
      type: "verify-email",
      expiresAt: { $lt: new Date() },
    });

    // generate token
    const token = generateToken(newUser.toObject());

    // store token in db
    const tokenDoc = new Token({
      user: newUser._id,
      token,
      type: "verify-email",
    });

    // prepare email
    const info = welcome({ user: newUser.toObject(), token });

    // save user
    await newUser.save();

    // save token
    await tokenDoc.save();

    // send mail
    await sendEmail(
      info.to,
      info.subject,
      info.text,
      info.html,
      info.attachments
    );

    // return response
    return res.status(201).json({
      message: "User created successfully. Please verify your email address.",
    });
  } catch (error) {
    return next(error);
  }
};
