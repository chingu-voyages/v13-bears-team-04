export type CommentType = {
  _id: string;
  author: {
    _id: string;
    username: string;
  };
  isOnPost: boolean;
  isOnComment: boolean;
  postId: string;
  commentId: string;
  content: string;
  createdOn: string;
  comments: CommentType[];
};
