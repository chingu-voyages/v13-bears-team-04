import React, { useState } from "react";
import makeDateAgo from "../../utils/date";

function limitrecentposttitle(title, recipe, limit = 10) {
  const newTitle = [];
  const numOfTitleElements = title.split(" ").length;
  let cnt = 0;
  if (numOfTitleElements > limit) {
    title.split(" ").reduce((acc, cur) => {
      cnt += 1;
      if (cnt <= limit) {
        newTitle.push(cur);
      }
      return acc;
    }, 0);
    return `${newTitle.join(" ")}...`;
  }
  console.log(title);
  return title;
}

export default function RecentPosts() {
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title:
        "TIL JSON.parse is faster than js object literalTIL JSON.parse is faster than js object literal",
      points: `${270}k`,
      numOfComments: 66,
      time: makeDateAgo("January 15, 2020 8:02 PM"),
      recent_img:
        "https://images.unsplash.com/photo-1569580427827-d732ee32ea79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    },
    {
      id: 2,
      title:
        "How to respond to this argument about consumption in a bitcoin world",
      points: `${270}k`,
      numOfComments: `${50}k`,
      time: makeDateAgo("January 14, 2020 6:03 PM"),
      recent_img:
        "https://images.unsplash.com/photo-1569025591510-a69144e20084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      title:
        "Announcements from NJ Bitcoin / Washington Elite and North American Bitcoin Conference",
      points: `${170}k`,
      numOfComments: 666,
      time: makeDateAgo("January 13, 2020 4:00 AM"),
      recent_img:
        "https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 4,
      title:
        "Bitcoin Isn’t Down Because of China, It’s Down Because You Don’t Need It",
      points: `${500}k`,
      numOfComments: 300,
      time: makeDateAgo("January 5, 2020 3:15 PM"),
      recent_img:
        "https://images.unsplash.com/photo-1574117482334-14b040604998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
    {
      id: 5,
      title:
        "I’m a lonely 4chan dweller, in college for computer engineering. I’m unsuccessfully attempting to fit in with the bitchy girls I’m surrounded with. Roast me.",
      points: `${270}k`,
      numOfComments: 5,
      time: makeDateAgo("Decmeber 31, 2019 12:05 AM"),
      recent_img:
        "https://images.unsplash.com/photo-1574392022138-a7d369a6ada3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
    },
  ]);

  return (
    <div className="recent-posts u-margin-bottom-small">
      <p className="recent-posts__headline">Recent posts</p>
      <div>
        {recentPosts.slice(0, 5).map(recentPost => {
          return (
            <div key={recentPost.title} className="recent-posts__element">
              <div className="recent-posts__row">
                <div className="recent-post-left">
                  <div className="recent-posts__image-wrapper">
                    <img
                      className="recent-posts__image-wrapper--icon"
                      src={recentPost.recent_img}
                      alt={recentPost.title}
                    />
                  </div>
                </div>
                <div className="recent-posts-right">
                  <p className="recent-posts__title">
                    {limitrecentposttitle(recentPost.title)}
                  </p>
                  <div className="recent-posts__title-sub">
                    <div className="recent-posts__title-sub__points">
                      <span className="recent-posts__info">{`${recentPost.points} points`}</span>
                    </div>
                    <div className="recent-posts__title-sub__comments">
                      <span className="recent-posts__info">{`${recentPost.numOfComments} comments`}</span>
                    </div>
                    <div className="recent-posts__title-sub__info">
                      <span className="recent-posts__info">{`${recentPost.time}`}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="clear">Clear</div>
    </div>
  );
}
