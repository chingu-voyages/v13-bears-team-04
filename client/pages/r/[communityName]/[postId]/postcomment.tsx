import React from "react";
import { useUser } from "../../../../contexts/user";

export default function PostComment(): JSX.Element {
  const { user } = useUser();

  if (!user) {
    return <div className="post__comment">Show authentication here</div>;
  }

  return <div className="post__comment">Show comment editor here</div>;
}
