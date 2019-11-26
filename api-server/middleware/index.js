const Session = require("../models/session");
// const User = require("../models/user");

exports.checkSession = async function(req, res, next) {
  try {
    const { sid } = req.cookies;
    const session = await Session.findOne({ _id: sid });
    if (session) next();
    res.status(401).json({ message: "Please log in first" });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: "Sorry, an error occured" });
  }
};
