import React, { useState } from "react";
import { Node } from "slate";
import { Editor } from "../Slate";
import fetchIt from "../../utils/fetch";
import { useUser } from "../../contexts/user";
import { CommentType } from "../../types/comment";

type Props = {
  handleSubmit: (comment: CommentType) => void;
  initialContent?: string;
  isEdit?: boolean;
  postId?: string;
  commentId?: string;
  isOnComment?: boolean;
};

export default function CommentCreateEdit({
  isEdit,
  initialContent,
  postId,
  commentId,
  isOnComment,
  handleSubmit,
}: Props) {
  const initialState = initialContent
    ? JSON.parse(initialContent)
    : [{ type: "paragraph", children: [{ text: "" }] }];
  const [content, setContent] = useState<Node[]>(initialState);
  const { token } = useUser();

  async function onSubmit() {
    console.log("processing...");

    try {
      let url;
      let body;

      if (isEdit) {
        url = `/${commentId}`;
        body = JSON.stringify({ content: JSON.stringify(content) });
      } else {
        url = isOnComment ? `/onComment/${commentId}` : "";
        body = JSON.stringify({ postId, content: JSON.stringify(content) });
      }

      const comment = await fetchIt(`/comment${url}`, {
        method: isEdit ? "PUT" : "POST",
        token,
        body,
      });

      handleSubmit(comment);

      if (!isEdit && !isOnComment) {
        setContent([{ type: "paragraph", children: [{ text: "" }] }]);
      }
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
      handleCommentSubmit={onSubmit}
    />
  );
}
