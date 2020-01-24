import React from "react";
import Link from "next/link";

type Props = {
  communityName: string;
  userMemberLevel: string;
};

export default function CommunityCreatePost({
  communityName,
  userMemberLevel,
}: Props) {
  if (!userMemberLevel) return null;

  return (
    <div className="community__createpost">
      <Link href={`/r/${communityName}/submit`}>
        <a>Create Post</a>
      </Link>
    </div>
  );
}
