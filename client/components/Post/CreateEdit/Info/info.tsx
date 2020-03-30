import React, { useEffect, useState } from "react";

import CommunityAbout from "../../../ViewCommunity/communityabout";
import CommunityRules from "../../../ViewCommunity/communityrules";

import { usePost } from "../../postcontext";
import { useSetCSSVariable } from "../../../../hooks";
import { CommunityType, initialCommunity } from "../../../../types/community";
import fetchIt from "../../../../utils/fetch";

export default function Info() {
  const { state } = usePost();
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
        users={communityInfo.users}
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
