import React from "react";
import CommunityBox from "./communitybox";

type Props = {
  administrators: string[];
  moderators: string[];
};

export default function CommunityMods({ administrators, moderators }: Props) {
  const users = [...administrators, ...moderators];

  console.log("users: ", users);

  return (
    <CommunityBox header="Moderators" cx="community__mods">
      <p>No Mods Found</p>
      {/* <div>
        {
          users.map()
        }
      </div> */}
    </CommunityBox>
  );
}
