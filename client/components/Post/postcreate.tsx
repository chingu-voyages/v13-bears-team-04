import React from "react";
import PostCreateEdit from "./CreateEdit";
import PageHead from "../PageHead";
import { useForceSignIn } from "../../hooks";

type Props = {
  communityId?: string;
  communityName?: string;
};

export default function PostCreate(props: Props) {
  useForceSignIn();

  return (
    <>
      <PageHead title="Creating Post | Reddit" />
      <PostCreateEdit {...props} />
    </>
  );
}
