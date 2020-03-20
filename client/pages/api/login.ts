import fetch from "isomorphic-unfetch";
import cookieWrapper, { NextApiFunction } from "../../utils/cookies";

const login: NextApiFunction = async (req, res) => {
  try {
    const { username, password } = req.body;

    const resp = await fetch("http://localhost:3000/api/user/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });

    const data = await resp.json();
    // if there's was an error, throw it
    if (!resp.ok) throw data;
    // otherwise return the results

    const { sid, token, user } = data;
    res.cookie("sid", sid);
    res.status(200).json({ token, user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export default cookieWrapper(login);
