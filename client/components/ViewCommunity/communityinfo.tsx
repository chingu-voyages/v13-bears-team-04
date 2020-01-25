import React from "react";
import Button from "../Button";
import { useUser } from "../../contexts/user";
import { useAuthPopup } from "../../contexts/authpopup";
import fetchIt from "../../utils/fetch";
import { State as SetMessageSetter } from "../../hooks/useMessageBox";
import { LogoIcon } from "../../svgs";

type Props = {
  communityId: string;
  title: string;
  userMemberLevel: string;
  setMessageBox: ({ msg, status }: SetMessageSetter) => void;
};

export default function CommunityInfo({
  communityId,
  title,
  userMemberLevel,
  setMessageBox,
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
  }

  return (
    <div className="community__info">
      <div className="community__banner" />
      <div className="community__header">
        <LogoIcon
          className="community__header__icon"
          primary={"var(--community-theme-main)"}
          secondary={"var(--community-theme-text)"}
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
