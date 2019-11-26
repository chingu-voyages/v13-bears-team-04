import React, { useState } from "react";
import fetch from "isomorphic-unfetch";

import "./recentposts.scss";

export default function recentPosts() {
  // eslint-disable-next-line no-shadow
  const [recentPosts, setRecentPosts] = useState([
    {
      id: 1,
      title:
        "TIL JSON.parse is faster than js object literalTIL JSON.parse is faster than js object literal",
      points: 27000,
      numOfComments: 66,
      time: 6,
      recent_img:
        "https://images.unsplash.com/photo-1569580427827-d732ee32ea79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1510&q=80",
    },
    {
      id: 2,
      title:
        "How to respond to this argument about consumption in a bitcoin world",
      points: 27000,
      numOfComments: 5000,
      time: 10,
      recent_img:
        "https://images.unsplash.com/photo-1569025591510-a69144e20084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 3,
      title:
        "Announcements from NJ Bitcoin / Washington Elite and North American Bitcoin Conference",
      points: 27000,
      numOfComments: 666,
      time: 8,
      recent_img:
        "https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
    },
    {
      id: 4,
      title:
        "Bitcoin Isn’t Down Because of China, It’s Down Because You Don’t Need It",
      points: 27000,
      numOfComments: 300,
      time: 3,
      recent_img:
        "https://images.unsplash.com/photo-1574117482334-14b040604998?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80",
    },
    {
      id: 5,
      title:
        "I’m a lonely 4chan dweller, in college for computer engineering. I’m unsuccessfully attempting to fit in with the bitchy girls I’m surrounded with. Roast me.",
      points: 27000,
      numOfComments: 5,
      time: 10,
      recent_img:
        "https://images.unsplash.com/photo-1574392022138-a7d369a6ada3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2468&q=80",
    },
  ]);

  return (
    <div className="recent-posts">
      <p className="recent-posts__headline">Recent posts</p>
      <div>
        {recentPosts.map(recentPost => {
          return (
            <div className="recent-posts__element">
              <div className="row recent-posts__element--border-length">
                <div className="col-1-of-4">
                  <div className="recent-posts__image-wrapper">
                    <img
                      className="recent-posts__image-wrapper--icon"
                      src={recentPost.recent_img}
                      alt={recentPost.title}
                    />
                  </div>
                </div>
                <div className="col-3-of-4">
                  <p className="recent-posts__title">{recentPost.title}</p>
                  <div className="col-1-of-3">
                    <span className="recent-posts__info">{`${recentPost.points} points`}</span>
                  </div>
                  <div className="col-1-of-3">
                    <span className="recent-posts__info">{`${recentPost.numOfComments} comments`}</span>
                  </div>
                  <div className="col-1-of-3">
                    <span className="recent-posts__info">{`${recentPost.time} h`}</span>
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
