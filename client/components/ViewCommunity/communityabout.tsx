import React from "react";
import dayjs from "dayjs";
import CommunityBox from "./communitybox";
import CommunityAboutUsers from "./communityaboutusers";
import Button from "../Button";

type Props = {
  description: string;
  createdOn: string;
  memberCount: number;
  userMemberLevel: string;
};

export default function CommunityAbout(props: Props) {
  const { description, createdOn, memberCount, userMemberLevel } = props;

  let randomViewerCount = 0;
  if (typeof window !== "undefined") {
    randomViewerCount = Math.floor(Math.random() * 1000000);
  }

  return (
    <CommunityBox header="About Community" cx="community__about">
      <div>{description}</div>
      <div className="community__about__users">
        <CommunityAboutUsers name="Members" count={memberCount} />
        <CommunityAboutUsers name="Viewers" count={randomViewerCount} />
      </div>
      <hr />
      <div>Created {dayjs(createdOn).format("MMMM D[,] YYYY")}</div>
      {!!userMemberLevel && (
        <>
          <Button href="/submit" text="Create Post" />
          <hr />
          <div>
            <span>Community Options</span>
          </div>
        </>
      )}
    </CommunityBox>
  );
}
