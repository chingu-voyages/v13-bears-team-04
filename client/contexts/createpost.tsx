import React, { createContext, useContext, useReducer } from "react";
import { Node } from "slate";

type Action =
  | { type: "SET_COMMUNITY"; communityId: string; communityName: string }
  | { type: "SET_TYPE"; postType: "text" | "link" }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_CONTENT"; content: Node[] }
  | { type: "SET_LINK"; link: string }
  | { type: "TOGGLE_EXTRA"; name: "isOC" | "isSpoiler" | "isOver18" };

type Dispatch = (action: Action) => void;

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

type ProviderTypes = {
  communityId: string;
  communityName: string;
  children: React.ReactNode;
};

type ContextTypes = {
  state: State;
  createPostDispatch: Dispatch;
};

type InitProps = {
  communityId: string;
  communityName: string;
};

const init: (props: InitProps) => State = ({ communityId, communityName }) => ({
  communityId,
  communityName,
  postType: "text",
  title: "",
  content: [{ type: "paragraph", children: [{ text: "" }] }],
  link: "",
  isOC: false,
  isSpoiler: false,
  isOver18: false,
});

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

const CreatePostContext = createContext({} as ContextTypes);

export const useCreatePost = () => useContext(CreatePostContext);

export const CreatePostProvider = ({
  communityId = "",
  communityName = "",
  children,
}: ProviderTypes) => {
  const [state, createPostDispatch] = useReducer(
    reducer,
    { communityId, communityName },
    init
  );

  return (
    <CreatePostContext.Provider value={{ state, createPostDispatch }}>
      {children}
    </CreatePostContext.Provider>
  );
};
