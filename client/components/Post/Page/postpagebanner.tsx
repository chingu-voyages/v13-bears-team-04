import React from "react";
import Votes from "../../Votes";
import Button from "../../Button";

type Props = {
  title: string;
  communityName: string;
};

export default function PostPageBanner({
  title,
  communityName,
}: Props): JSX.Element {
  return (
    <div className="viewpost__banner">
      <Votes isHorizontal cxInner="viewpost__banner__votes" />

      <h2 className="viewpost__banner__title">{title}</h2>
      <Button
        text="Close"
        icon="times"
        size="tight"
        href="/r/[communityName]"
        as={`/r/${communityName}`}
        cx="viewpost__banner__closebtn"
      />
    </div>
  );
}
