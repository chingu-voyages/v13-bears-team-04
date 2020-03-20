import fetchIt from "./fetch";

export const handleMembership = async (
  isAuthenticated: boolean,
  setAuthPopup: () => void,
  communityId: string,
  userId: string,
  userMemberLevel: string
): Promise<void> => {
  if (!isAuthenticated) {
    setAuthPopup("signup");
    return;
  }

  // reusable values
  const baseURL = `/community/${communityId}/users`;
  const body = JSON.stringify({ userId });
  const opts = { body };

  try {
    // leave the community
    if (userMemberLevel) {
      const leaveURL = `${baseURL}/${userMemberLevel}s`;
      const updatedUser = await fetchIt(leaveURL, {
        method: "DELETE",
        ...opts,
      });
      setUser(updatedUser);
      setMessageBox({
        msg: `You've successfully left your r/${title} family. Congrats.`,
        status: "success",
      });
    }

    // join the community
    if (!userMemberLevel) {
      const joinURL = `${baseURL}/members`;
      const updatedUser = await fetchIt(joinURL, {
        method: "POST",
        ...opts,
      });
      setUser(updatedUser);
      setMessageBox({
        msg: `Thanks for joining, r/${title}!`,
        status: "success",
      });
    }
  } catch (err) {
    setMessageBox({ msg: err.message, status: "error" });
  }
};
