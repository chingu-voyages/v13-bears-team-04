import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

import "./recentposts.scss";

export default function recentPosts() {
  const [recentPost, setRecentPosts] = useState([
    {
      id: 1,
      title:
        "In the early morning of election day, many elderly are carrying a same brand of new pillow. They claimed they bought them but most shops are not open at that time of the day. It's suspected that those are gifts from pro CCP politicians after voting.",
      points: 27000,
      numOfComments: 66,
      time: 6,
    },
    {
      id: 2,
      title:
        "How to respond to this argument about consumption in a bitcoin world",
      points: 27000,
      numOfComments: 5000,
      time: 10,
    },
    {
      id: 3,
      title:
        "Announcements from NJ Bitcoin / Washington Elite and North American Bitcoin Conference",
      points: 27000,
      numOfComments: 666,
      time: 8,
    },
    {
      id: 4,
      title:
        "Bitcoin Isn’t Down Because of China, It’s Down Because You Don’t Need It",
      points: 27000,
      numOfComments: 300,
      time: 3,
    },
    {
      id: 5,
      title:
        "I’m a lonely 4chan dweller, in college for computer engineering. I’m unsuccessfully attempting to fit in with the bitchy girls I’m surrounded with. Roast me.",
      points: 27000,
      numOfComments: 5,
      time: 10,
    },
  ]);

  // return (
  //
  // )
}
