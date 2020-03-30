export type CommunityType = {
  users: {
    members: string[];
    moderators: string[];
    administrators: string[];
    [key: string]: string[];
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

export const initialCommunity: CommunityType = {
  users: {
    members: [],
    moderators: [],
    administrators: [],
  },
  rules: [],
  posts: [],
  communitiesRelated: [],
  topics: [],
  theme: {
    "--community-theme-main": "",
    "--community-theme-text": "",
  },
  _id: "",
  name: "",
  description: "",
  communityType: "public",
  isOver18: false,
  createdOn: "",
  lastUpvoted: "",
};
