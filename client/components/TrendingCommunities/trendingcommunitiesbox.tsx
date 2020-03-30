import React from "react";
import Link from "next/link";

import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";
import { useUser } from "../../contexts/user";

import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";
import { LogoIcon } from "../../svgs";
import { useCheckMembership } from "../../hooks";
import shrinkNum from "../../utils/shrinknum";

type Community = {
  community: CommunityType;
};

export default function TrendingCommunitiesBox({ community }: Community) {
  const { _id, theme, users, name } = community;

  const { isAuthenticated, token, setUser } = useUser();
  const { setAuthPopup } = useAuthPopup();
  const memberLevel = useCheckMembership(_id);

  const numOfMembers = Object.keys(users).reduce((memberCount, key) => {
    return memberCount + users[key].length;
  }, 0);
  const memberCount = shrinkNum(numOfMembers);

  function handleClick() {
    if (!isAuthenticated) {
      setAuthPopup("signin");
    } else {
      joinCommunity();
    }
  }

  async function joinCommunity() {
    try {
      const key = memberLevel ? `${memberLevel}s` : "members";
      const url = `/community/${_id}/users/${key}`;
      const updatedUser = await fetchIt(url, {
        token,
        method: memberLevel ? "DELETE" : "POST",
      });
      setUser({ type: "SET_USER", token, user: updatedUser });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="trending-community__row">
      <div className="trending-community__row__info">
        <LogoIcon
          primary={theme["--community-theme-main"]}
          secondary={theme["--community-theme-text"]}
          className="trending-community__row__info__image"
        />

        <div className="trending-community__row__info__text">
          <Link href="/r/[communityName]" as={`/r/${name}`}>
            <a>r/{name}</a>
          </Link>
          <p>{`${memberCount} member${numOfMembers === 1 ? "" : "s"}`}</p>
        </div>
      </div>

      <Button
        cx="trending-community__join-btn"
        handleClick={handleClick}
        inverted={!!memberLevel}
        text={memberLevel ? "Leave" : "Join"}
        size="tight"
      />
    </div>
  );
}
