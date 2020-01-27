import React, { useState } from "react";

import "../../sass/components/_post.scss";

export default function Post() {
  const [postInfo] = useState({
    user: "heyoheyo",
    postTitle: "this is a cool post huh",
    content: "content here",
    likes: 0 + "k",
    subreddit: "r/coolsubreddit",
    numOfComments: 0 + "k",
  });

  return (
    <div>
      <div className="post__container">
        <div className="post__container__title">
          <h1>{postInfo.postTitle}</h1>
        </div>
      </div>
    </div>
  );
}
