import React, { useEffect, useState } from "react";
import CommunityAbout from "../../ViewCommunity/communityabout";
import CommunityRules from "../../ViewCommunity/communityrules";
import { CommunityType, initialCommunity } from "../../../types/community";

import { useCreatePost } from "../../../contexts/createpost";
import { useSetCSSVariable } from "../../../hooks";
import fetchIt from "../../../utils/fetch";

export default function Info() {
  const { state } = useCreatePost();
  const { communityName } = state;

  const [communityInfo, setCommunityInfo] = useState<CommunityType>(
    initialCommunity
  );

  useSetCSSVariable(communityInfo.theme);

  useEffect(() => {
    async function fetchCommunityInfo() {
      try {
        const community = await fetchIt(`/community/${communityName}`);
        if (!community) throw new Error("Error, fetching community");
        setCommunityInfo(community);
      } catch (err) {
        console.log(err.message);
      }
    }

    if (communityName === "") {
      setCommunityInfo(initialCommunity);
    } else {
      fetchCommunityInfo();
    }
  }, [communityName]);

  if (!communityInfo.description) return null;

  return (
    <>
      <CommunityAbout
        memberCount={communityInfo.users.members.length}
        userMemberLevel=""
        description={communityInfo.description}
        createdOn={communityInfo.createdOn}
      />
      <CommunityRules
        communityName={communityInfo.name}
        rules={communityInfo.rules}
      />
    </>
  );
}
