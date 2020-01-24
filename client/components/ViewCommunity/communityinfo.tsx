import React from "react";
import Button from "../Button";
import { useUser } from "../../contexts/user";
import { useAuthPopup } from "../../contexts/authpopup";
import fetchIt from "../../utils/fetch";

type Props = {
  communityId: string;
  title: string;
  userMemberLevel: string;
};

export default function CommunityInfo({
  communityId,
  title,
  userMemberLevel,
}: Props) {
  const { user, setUser } = useUser();
  const { setAuthPopup } = useAuthPopup();

  async function handleMembership() {
    if (!user) return setAuthPopup("signup");

    // reusable values
    const baseURL = `/community/${communityId}/users`;
    const body = JSON.stringify({ userId: user._id });
    const opts = { body, ctx: {} };

    try {
      // leave the community
      if (userMemberLevel) {
        const leaveURL = `${baseURL}/${userMemberLevel}s`;
        console.log(leaveURL);
        const updatedUser = await fetchIt(leaveURL, {
          method: "DELETE",
          ...opts,
        });
        console.log(updatedUser);
        setUser(updatedUser);
      }

      // join the community
      if (!userMemberLevel) {
        const joinURL = `${baseURL}/members`;
        console.log(joinURL);
        const updatedUser = await fetchIt(joinURL, {
          method: "POST",
          ...opts,
        });
        console.log(updatedUser);
        setUser(updatedUser);
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="community__info">
      <div className="community__banner" />
      <div className="community__header">
        <img
          className="community__header__icon"
          src="/nav-images/logo-icon.svg"
          alt="reddit logo icon"
        />
        <div className="community__header__titles">
          <h1>{title}</h1>
          <h3>r/{title}</h3>
        </div>
        <Button
          cx="community__header__btn"
          text={!userMemberLevel ? "Join" : "Leave"}
          handleClick={handleMembership}
        />
      </div>
    </div>
  );
}
