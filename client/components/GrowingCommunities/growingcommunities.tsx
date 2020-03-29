import React, { useEffect, useState } from "react";
import Link from "next/link";

import Button from "../Button";
import FAIcon from "../FAIcon";
import { LogoIcon } from "../../svgs";

import { CommunityType } from "../../types/community";
import fetchIt from "../../utils/fetch";

export default function GrowingCommunities(): JSX.Element {
  const [isLoading, setLoader] = useState(true);
  const [communities, setCommunities] = useState<CommunityType[]>([]);

  useEffect(() => {
    async function getCommunities(): Promise<void> {
      try {
        const foundCommunities = await fetchIt("/community");
        setCommunities(foundCommunities.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
      setLoader(false);
    }

    getCommunities();
  }, []);

  return (
    <div className="growing-communities">
      <div className="growing-communities__background">
        <p className="growing-communities__headline">
          Today&apos;s Top Growing Communities
        </p>
      </div>

      {isLoading
        ? "Loading..."
        : communities.map((community, index) => {
            const isEven = index % 2 !== 0;
            return (
              <Link
                href="/r/[communityName]"
                as={`/r/${community.name}`}
                key={community._id}
              >
                <a className="growing-communities__row">
                  <span className="growing-communities__row__index">
                    {index + 1}
                  </span>

                  <FAIcon
                    color={isEven ? "red" : "green"}
                    icon={isEven ? "caret-down" : "caret-up"}
                    className="growing-communities__row__arrow"
                  />

                  <LogoIcon
                    primary={community.theme["--community-theme-main"]}
                    secondary={community.theme["--community-theme-text"]}
                    className="growing-communities__row__icon"
                  />

                  <p className="growing-communities__row__name">
                    r/{community.name}
                  </p>
                </a>
              </Link>
            );
          })}

      <div className="growing-communities__button">
        <Button cx="growing-communities__button__viewall" text="View All" />
      </div>
    </div>
  );
}
