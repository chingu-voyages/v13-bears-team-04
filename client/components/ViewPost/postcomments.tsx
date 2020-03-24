import React from "react";
import { CardComment } from "../Cards";
import { CommentType } from "../../types/comment";

type Props = {
  comments: CommentType[];
};

export default function PostComments({ comments }: Props): JSX.Element {
  console.log(comments);
  return (
    <div className="viewpost__comments">
      {!comments.length ? (
        <div className="viewpost__comments__none">No Comments Yet</div>
      ) : (
        comments.map(comment => (
          <CardComment key={comment._id} comment={comment} />
        ))
      )}
    </div>
  );
}
