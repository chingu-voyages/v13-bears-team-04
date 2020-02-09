import React from "react";
import shrinkNum from "../../utils/shrinknum";

type Props = {
  name: string;
  count: number;
};

export default function CommunityAboutUsers({
  name,
  count,
}: Props): JSX.Element {
  return (
    <div>
      <p>{shrinkNum(count)}</p>
      <p>{name}</p>
    </div>
  );
}
