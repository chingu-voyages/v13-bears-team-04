import React, { useState } from "react";
import { Render, Editor } from "../Slate";

export default function Post({ post }) {
  console.log(post);

  return (
    <div className="post__container">
      <div className="post__container__title">
        <h1>{post.title}</h1>
        <Render content={post.content} />

        {/* Show the comments / give award etc. */}
        {/* ..... */}

        {/* Add comment here */}
        {/* <Editor
          isComment
          //  value: Node[];
          //  setValue?: (value: Node[]) => void;
          //  handleCommentSubmit?: () => void;
        /> */}

        {/* Show comments here */}
        {/* ... */}
      </div>
    </div>
  );
} //

//
//
// I guess I'll make that since it connects with the backend
// and I still haven't even written up comments there yet anyways
//
// I'll leave this component as is for now
//
//

// const samplePost = {
//   comments: [],
//   voteScore: 0,
//   isDeleted: false,
//   isReported: false,
//   isOver18: false,
//   isOC: true,
//   isSpoiler: false,
//   _id: "5e2c0794ef4a514a28106109",
//   community: {
//     theme: {
//       "--community-theme-main": "#bf79d2",
//       "--community-theme-text": "#36005b",
//     },
//     name: "Fitness",
//   },
//   postType: "text",
//   title: "2020",
//   content: `[{"type":"paragraph","children":[{"text":"Woo resolutions! ","bold":true}]},{"type":"paragraph","children":[{"text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "}]},{"type":"paragraph","children":[{"text":"Et leo duis ut diam quam nulla porttitor massa. "}]},{"type":"paragraph","children":[{"text":"Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus."}]}]`,
//   author: { username: "Daniel" },
//   createdOn: "2020-01-25T09:17:08.663Z",
//   lastModified: "2020-01-25T09:17:08.663Z",
//   lastUpvoted: "2020-01-25T09:17:08.663Z",
// };