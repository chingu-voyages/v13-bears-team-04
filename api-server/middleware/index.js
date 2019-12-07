const createError = require("http-errors");
const Session = require("../models/session");
const User = require("../models/user");

exports.checkSession = async function(req, res, next) {
  try {
    // check for a valid session
    if (!("authorization" in req.headers)) {
      throw createError(
        401,
        "You messed up, the authorization header is missing"
      );
    }
    const { sid } = JSON.parse(req.headers.authorization);
    const session = await Session.findById(sid);
    if (!session) {
      throw createError(401, "Invalid session. Please log in again.");
    }
    // grab the session's user object and pass it along if valid
    const user = await User.findById(session.userId);
    if (!user) {
      throw createError(401, "Valid session, but couldn't find the user");
    }
    // sets the user for this request, so you can use route function
    res.locals.user = user;
    next();
  } catch (err) {
    next(err);
  }
};
