import React, { useState } from "react";

import "../../sass/components/_post.scss";

export default function Post() {
  const [postInfo] = useState({
    user: "heyoheyo",
    content: "content here",
    likes: 0 + "k",
    subreddit: "r/coolsubreddit",
    numOfComments: 0 + "k",
  });
}
