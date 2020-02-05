import React from "react";
import PostListCard from "../PostList/postlistcard";

type Props = {
  post: {
    comments: string[];
    voteScore: number;
    isDeleted: boolean;
    isReported: boolean;
    isOver18: boolean;
    isOC: boolean;
    isSpoiler: boolean;
    _id: string;
    community: {
      theme: {
        ["--community-theme-main"]: string;
        ["--community-theme-text"]: string;
      };
      name: string;
    };
    postType: string;
    title: string;
    content: string;
    author: { username: string };
    createdOn: string;
    lastModified: string;
    lastUpvoted: string;
  };
};

export default function Post({ post }: Props) {
  console.log(post);

  return (
    <div className="post__container">
      <PostListCard {...post} onCommunityPage={false} />
      <div className="post__container__title">
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
