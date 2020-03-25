import { CommentType } from "./comment";

export type PostType = {
  numOfComments: number;
  comments: CommentType[];
  votes: string[];
  isDeleted: boolean;
  isReported: boolean;
  isOver18: boolean;
  isOC: boolean;
  isSpoiler: boolean;
  _id: string;
  community: {
    name: string;
    theme: {
      ["--community-theme-main"]: string;
      ["--community-theme-text"]: string;
    };
    description?: string;
    users?: {
      members: string[];
      moderators: string[];
      administrators: string[];
    };
    createdOn?: string;
    _id?: string;
  };
  postType: string;
  title: string;
  content: string;
  author: {
    username: string;
    _id: string;
  };
  createdOn: string;
  lastModified: string;
  lastUpvoted: string;
};
