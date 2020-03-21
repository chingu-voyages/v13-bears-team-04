import cookieWrapper, { NextApiFunction } from "../../utils/cookies";
import fetchIt from "../../utils/fetch";

const login: NextApiFunction = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    const data = await fetchIt("/user/signup", {
      method: "POST",
      body: JSON.stringify({ username, password, email }),
    });

    const { sid, token, user } = data;
    res.cookie("sid", sid);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default cookieWrapper(login);
