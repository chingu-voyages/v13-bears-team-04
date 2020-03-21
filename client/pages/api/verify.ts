import cookieWrapper, { NextApiFunction } from "../../utils/cookies";
import fetchIt from "../../utils/fetch";

const verify: NextApiFunction = async (req, res) => {
  try {
    const { sid } = req.cookies;
    if (!sid) throw new Error("No session found");

    const data = await fetchIt("/user/verify", {
      method: "POST",
      cookie: JSON.stringify({ sid }),
    });

    res.status(200).json(data);
  } catch (err) {
    res.cookie("sid", "", { expires: new Date() });
    res.status(400).json({ message: err.message });
  }
};

export default cookieWrapper(verify);
