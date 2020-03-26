import React from "react";
import PostCreateEdit from "./CreateEdit";
import { useForceSignIn } from "../../hooks";

type Props = {
  communityId?: string;
  communityName?: string;
};

export default function PostCreate(props: Props) {
  useForceSignIn();

  return <PostCreateEdit {...props} />;
}
