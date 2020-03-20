const createError = require("http-errors");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { User, Session } = require("../models");
const { verifyToken } = require("../middleware");

// ===== ROUTES ===== //

router.get("/", getAllUsers);
router.post("/verify", handleVerification);
router.post("/login", handleLogin);
router.post("/logout", verifyToken, handleLogout);
router.post("/signup", handleSignup);

// ===== CONTROLLERS ===== //

// SECURE ME
async function getAllUsers(req, res, next) {
  try {
    const users = await User.find();
    console.log(users);
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}

async function handleVerification(req, res, next) {
  try {
    const { cookie } = req.headers;
    if (!cookie) throw createError(400, "No cookie found");

    const { sid } = JSON.parse(cookie);
    if (!sid) throw createError(400, "No session cookie found");

    const session = await Session.findById(sid);
    if (!session) throw createError(401, "Invalid session. Please log in.");

    const user = await User.findById(session.userId)
      .select({ password: 0 })
      .lean();
    if (!user) {
      // there's no user for that session, so we'll remove it
      await session.remove();
      throw createError(401, "Valid session. Invalid user");
    }

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.status(200).json({ token, user });
  } catch (err) {
    next(err);
  }
}

async function handleLogin(req, res, next) {
  try {
    const lowerUsername = req.body.username.toLowerCase();

    const user = await User.findOne({ lowerUsername });
    if (!user) throw createError(401, "User not found");

    const isMatch = await user.checkPassword(req.body.password, user.password);
    if (!isMatch) throw createError(401, "Wrong password");

    // successful login; create a user session
    const session = await Session.create({ userId: user._id });
    if (!session) throw createError(401, "Error creating session");
    const sid = session._id;

    // don't want to send the user's password to the client
    const { password, ...goodUser } = user._doc;

    const token = jwt.sign(goodUser, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.status(200).json({ sid, token, user: goodUser });
  } catch (err) {
    next(err);
  }
}

async function handleLogout(req, res, next) {
  try {
    const { _id: userId } = res.locals.user;

    // delete all this user's sessions
    await Session.deleteMany({ userId });

    res.status(200).json({ message: "Successfully logged out" });
  } catch (err) {
    next(err);
  }
}

async function handleSignup(req, res, next) {
  try {
    const newUser = await User.create(req.body);
    if (!newUser) throw createError(400, "Error creating user");

    // create a session
    const session = await Session.create({ userId: newUser._id });
    if (!session) throw createError(400, "Error creating session");

    const { password, ...user } = newUser._doc;

    const token = jwt.sign(user, process.env.JWT_SECRET, {
      expiresIn: "3h",
    });

    res.status(200).json({ sid: session._id, token, user });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
