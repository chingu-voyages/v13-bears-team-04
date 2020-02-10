export type UserType = {
  _id: string;
  username: string;
  email: string;
  posts: string[];
  comments: string[];
  communities: {
    member: string[];
    moderator: string[];
    administrator: string[];
  };
  createdOn: string;
};
