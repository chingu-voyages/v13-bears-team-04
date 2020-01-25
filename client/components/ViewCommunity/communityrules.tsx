import React from "react";
import CommunityBox from "./communitybox";

type Props = {
  rules: string[];
  communityName: string;
};

export default function CommunityRules({ rules, communityName }: Props) {
  return (
    <CommunityBox header={`r/${communityName} Rules`} cx="community__rules">
      {!rules.length ? (
        <p>No Rules.. yet. Behave yourselves.</p>
      ) : (
        <ul>
          {rules.map(rule => (
            <li>{rule}</li>
          ))}
        </ul>
      )}
    </CommunityBox>
  );
}
