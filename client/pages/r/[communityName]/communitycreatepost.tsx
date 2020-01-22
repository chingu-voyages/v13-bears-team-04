import React from "react";
import Link from "next/link";
import { useUser } from "../../../contexts/user";

type Props = {
  communityName: string;
};

export default function CommunityCreatePost({ communityName }: Props) {
  const { user } = useUser();

  if (!user) return null;

  return (
    <div className="community__createpost">
      <Link href={`/r/${communityName}/submit`}>
        <a>Create Post</a>
      </Link>
    </div>
  );
}
