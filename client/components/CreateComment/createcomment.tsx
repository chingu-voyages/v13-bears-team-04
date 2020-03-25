import React, { useState } from "react";
import { Node } from "slate";
import { Editor } from "../Slate";
import fetchIt from "../../utils/fetch";
import { useUser } from "../../contexts/user";
import { CommentType } from "../../types/comment";

type Props = {
  postId: string;
  commentId?: string;
  isOnComment?: boolean;
  handleAddition: (newComment: CommentType) => void;
};

export default function CreateComment({
  postId,
  commentId,
  isOnComment,
  handleAddition,
}: Props) {
  const { token } = useUser();

  const [content, setContent] = useState<Node[]>([
    { type: "paragraph", children: [{ text: "" }] },
  ]);

  async function handleSubmit() {
    console.log("processing...");

    try {
      const url = isOnComment ? `/onComment/${commentId}` : "";
      const body = JSON.stringify({ postId, content: JSON.stringify(content) });

      const newComment = await fetchIt(`/comment${url}`, {
        method: "POST",
        token,
        body,
      });

      handleAddition(newComment);
      setContent([{ type: "paragraph", children: [{ text: "" }] }]);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Editor
      isComment
      cx="viewpost__comment__create"
      value={content}
      setValue={setContent}
      handleCommentSubmit={handleSubmit}
    />
  );
}
