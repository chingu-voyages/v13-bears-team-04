const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw createError(401, "Authorization Required");

    const token = authorization.split(" ")[1];
    if (!token || token === "undefined") {
      throw createError(401, "Incorrect Token");
    }

    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(verifiedUser._id);
    if (!user) throw createError(400, "User not found");

    res.locals.user = user;

    next();
  } catch (err) {
    next(err);
  }
};
