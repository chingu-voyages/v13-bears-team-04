import cookieWrapper, { NextApiFunction } from "../../utils/cookies";
import fetchIt from "../../utils/fetch";

const logout: NextApiFunction = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) throw new Error("Missing Token");

    const data = await fetchIt("/user/logout", {
      method: "POST",
      token,
    });

    res.cookie("sid", "", { expires: new Date() });
    res.status(200).json({ message: data.message });
  } catch (err) {
    res.cookie("sid", "", { expires: new Date() });
    res.status(400).json({ message: err.message });
  }
};

export default cookieWrapper(logout);
