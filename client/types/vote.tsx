export type VoteType = {
  owner: string;
  isUpVote: boolean;
  voteDate: string;
  isOnPost?: boolean;
  postId?: string;
  isOnComment?: boolean;
  commentId?: string;
};
