import React from "react";
import CommunityBox from "./communitybox";

type Props = {
  administrators: string[];
  moderators: string[];
};

export default function CommunityMods({ administrators, moderators }: Props) {
  const users = [...administrators, ...moderators];

  return (
    <CommunityBox header="Moderators" cx="community__mods">
      {!!users.length ? (
        <ul>
          {users.map(user => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No Mods Found</p>
      )}
    </CommunityBox>
  );
}
