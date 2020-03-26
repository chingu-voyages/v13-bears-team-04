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
};

type InitProps = {
  post?: PostType;
  communityId?: string;
  communityName?: string;
};

const init = ({ communityId = "", communityName = "", post }: InitProps) => ({
  postType: post?.postType || "text",
  title: post?.title || "",
  content: post?.content || [{ type: "paragraph", children: [{ text: "" }] }],
  link: "",
  isOC: post?.isOC || false,
  isSpoiler: post?.isSpoiler || false,
  isOver18: post?.isOver18 || false,
  communityId,
  communityName,
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
    postDispatch: (action: Action) => void;
  }
);

type ProviderTypes = {
  communityId?: string;
  communityName?: string;
  post?: PostType;
  children: React.ReactNode;
};

export const PostProvider = ({
  communityId,
  communityName,
  post,
  children,
}: ProviderTypes): JSX.Element => {
  const initialState = { communityId, communityName, post };
  const [state, postDispatch] = useReducer(reducer, initialState, init);

  return (
    <PostContext.Provider value={{ state, postDispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
