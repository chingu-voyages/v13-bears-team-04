import React, { useState } from "react";

const fakePosts = [
  {
    id: 1,
    title: "TIL.parse is faster than js object literal",
    points: `${270}k`,
    numOfComments: 66,
    recentImg: `https://images.unsplash.com/photo-1569580427827-d732ee32ea79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=65&q=80`,
  },
  {
    id: 2,
    title: "How bitcoin world",
    points: `${22}k`,
    numOfComments: `${50}k`,
    recentImg: `https://images.unsplash.com/photo-1569025591510-a69144e20084?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=65&q=80`,
  },
  {
    id: 3,
    title: "Ann American Bitcoin Conference",
    points: `${170}k`,
    numOfComments: 666,
    recentImg: `https://images.unsplash.com/photo-1490773996481-9ff25c7d9484?ixlib=rb-1.2.1&auto=format&fit=crop&w=65&q=80`,
  },
];

export default function RecentPosts() {
  const [recentPosts] = useState(fakePosts);

  return (
    <div className="recent-posts">
      <p className="recent-posts__headline">Recent posts</p>

      {recentPosts.slice(0, 5).map(recentPost => {
        return (
          <div key={recentPost.title} className="recent-posts__row">
            <img
              className="recent-posts__image"
              src={recentPost.recentImg}
              alt={recentPost.title}
            />

            <div className="recent-posts__details">
              <h3 className="recent-posts__details__title">
                {recentPost.title}
              </h3>

              <div className="recent-posts__details__info">
                <span>{`${recentPost.points} points`}</span>
                <span>{`${recentPost.numOfComments} comments`}</span>
                <span>12h</span>
              </div>
            </div>
          </div>
        );
      })}

      <div className="recent-posts__clear">
        <button
          type="button"
          onClick={() => console.log("Clearing Recent Posts")}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
