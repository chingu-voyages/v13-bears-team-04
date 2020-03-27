import React, { createContext, useContext, useReducer } from "react";
import { Node } from "slate";
import { PostType } from "../../types/post";

type State = {
  communityId: string;
  communityName: string;
  postType: "text" | "link";
  title: string;
  content: Node[];
  link: string;
  isOC: boolean;
  isSpoiler: boolean;
  isOver18: boolean;
  isEdit: boolean;
  postId: string;
};

type InitProps = {
  post?: PostType;
  communityId: string;
  communityName: string;
  isEdit: boolean;
};

const init: (props: InitProps) => State = ({
  communityId,
  communityName,
  post,
  isEdit,
}) => ({
  isEdit,
  communityId,
  communityName,
  content: post?.content
    ? JSON.parse(post?.content)
    : [{ type: "paragraph", children: [{ text: "" }] }],
  postType: post?.postType || "text",
  title: post?.title || "",
  isOC: post?.isOC || false,
  isSpoiler: post?.isSpoiler || false,
  isOver18: post?.isOver18 || false,
  postId: post?._id || "",
  link: "",
});

type Action =
  | { type: "SET_COMMUNITY"; communityId: string; communityName: string }
  | { type: "SET_TYPE"; postType: "text" | "link" }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_CONTENT"; content: Node[] }
  | { type: "SET_LINK"; link: string }
  | { type: "TOGGLE_EXTRA"; name: "isOC" | "isSpoiler" | "isOver18" };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_COMMUNITY":
      return {
        ...state,
        communityId: action.communityId,
        communityName: action.communityName,
      };
    case "SET_TYPE":
      return { ...state, postType: action.postType };
    case "SET_TITLE":
      return { ...state, title: action.title };
    case "SET_CONTENT":
      return { ...state, content: action.content };
    case "SET_LINK":
      return { ...state, link: action.link };
    case "TOGGLE_EXTRA":
      return { ...state, [action.name]: !state[action.name] };
    default:
      return state;
  }
};

const PostContext = createContext(
  {} as {
    state: State;
    postDispatch: React.Dispatch<Action>;
  }
);

type ProviderTypes = {
  communityId?: string;
  communityName?: string;
  post?: PostType;
  isEdit?: boolean;
  children: React.ReactNode;
};

export const PostProvider = ({
  communityId = "",
  communityName = "",
  isEdit = false,
  post,
  children,
}: ProviderTypes): JSX.Element => {
  const [state, postDispatch] = useReducer(
    reducer,
    { communityId, communityName, post, isEdit },
    init
  );

  return (
    <PostContext.Provider value={{ state, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
