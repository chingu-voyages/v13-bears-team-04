import React from "react";
import { useUser } from "../../../contexts/user";
import Button from "../../../components/Button";

type UserCommunities = {
  [level: string]: string[];
};

type Props = {
  communityId: string;
  title: string;
};

export default function CommunityInfo({ communityId, title }: Props) {
  const { user } = useUser();

  const activeMember = user && checkMembership(communityId, user.communities);

  console.log(activeMember);
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
          text={!activeMember ? "Join" : "Leave"}
        />
      </div>
    </div>
  );
}

function checkMembership(
  communityId: string,
  userCommunities: UserCommunities
) {
  let userMemberLevel = "";
  const membershipLevels = Object.keys(userCommunities);

  membershipLevels.some((level: string) => {
    if (userCommunities[level].some((id: string) => id === communityId)) {
      userMemberLevel = level;
      return true;
    }
    return false;
  });

  return userMemberLevel;
}
