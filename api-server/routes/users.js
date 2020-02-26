const createError = require("http-errors");
const router = require("express").Router();
const { User, Session } = require("../models");
const { checkSession } = require("../middleware");

// ===== ROUTES ===== //

router.get("/", getAllUsers);
router.get("/verify", checkSession, handleVerification);
router.post("/login", handleLogin);
router.post("/logout", checkSession, handleLogout);
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
    // user was set in checkSession middleware
    const user = res.locals.user;
    // don't want to send the user's password to the client
    const { password, ...goodUser } = user._doc;
    res.status(200).json(goodUser);
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
    if (!session || !session._id) {
      throw createError(401, "Error creating session");
    }

    // don't want to send the user's password to the client
    const { password, ...goodUser } = user._doc;
    res.status(200).json({ sid: session._id, ...goodUser });
  } catch (err) {
    console.log("NEXT:", err);
    next(err);
  }
}

async function handleLogout(req, res, next) {
  try {
    const { userId } = req.body;
    // user was set in checkSession middleware
    const { _id } = res.locals.user;
    if (String(_id) !== userId) {
      throw createError(
        401,
        "Sorry not sorry. You can't sign out another user"
      );
    }
    // delete all this user's sessions
    await Session.deleteMany({ userId });

    res.status(200).json({ message: "Successfully logged out" });
  } catch (err) {
    next(err);
  }
}

async function handleSignup(req, res, next) {
  try {
    // create user
    const newUser = await User.create(req.body);
    if (!newUser) throw createError(400, "Error creating user");

    // create a session
    const session = await Session.create({ userId: newUser._id });
    if (!session || !session._id) {
      throw createError(400, "Error creating session");
    }

    // separate password since we don't want to send to the client
    const { password, ...goodUser } = newUser._doc;

    res.status(200).json({ sid: session._id, ...goodUser });
  } catch (err) {
    next(err);
  }
}

module.exports = router;
