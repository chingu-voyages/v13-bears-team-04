import fetch from "isomorphic-unfetch";
import cookieWrapper, { NextApiFunction } from "../../utils/cookies";

const verify: NextApiFunction = async (req, res) => {
  try {
    const { sid } = req.cookies;
    if (!sid) throw new Error("No session found");

    const resp = await fetch("http://localhost:3000/api/user/verify", {
      method: "POST",
      headers: { cookie: JSON.stringify({ sid }) },
    });

    const data = await resp.json();
    // if there's was an error, throw it
    if (!resp.ok) throw data;
    // otherwise return the results

    res.status(200).json(data);
  } catch (err) {
    res.cookie("sid", "", { expires: new Date() });
    res.status(400).json({ message: err.message });
  }
};

export default cookieWrapper(verify);
