export type Props = {
  error: string;
  community: CommunityType;
};

export type CommunityType = {
  users: {
    members: string[];
    moderators: string[];
    administrators: string[];
  };
  rules: string[];
  posts: string[];
  communitiesRelated: string[];
  topics: string[];
  theme: {
    ["--community-theme-main"]: string;
    ["--community-theme-text"]: string;
  };
  _id: string;
  name: string;
  description: string;
  communityType: string;
  isOver18: boolean;
  createdOn: string;
  lastUpvoted: string;
};
