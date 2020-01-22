import React from "react";
import dayjs from "dayjs";
import CommunityBox from "./communitybox";
import CommunityAboutUsers from "./communityaboutusers";
import Button from "../../../components/Button";
import { useUser } from "../../../contexts/user";

type Props = {
  description: string;
  createdOn: string;
  memberCount: number;
};

const randomViewerCount = Math.floor(Math.random() * 1000000);

export default function CommunityAbout(props: Props) {
  const { description, createdOn, memberCount } = props;

  const { user } = useUser();

  return (
    <CommunityBox header="About Community" cx="community__about">
      <div>{description}</div>
      <div className="community__about__users">
        <CommunityAboutUsers name="Members" count={memberCount} />
        <CommunityAboutUsers name="Viewers" count={randomViewerCount} />
      </div>
      <hr />
      <div>Created {dayjs(createdOn).format("MMMM D[,] YYYY")}</div>
      {!!user && (
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
