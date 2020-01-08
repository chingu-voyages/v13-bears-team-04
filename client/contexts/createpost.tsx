import React, { createContext, useContext, useReducer } from "react";
import { Node } from "slate";

type RichOptions =
  | "bold"
  | "italic"
  | "link"
  | "strike"
  | "inlinecode"
  | "superscript"
  | "spoiler"
  | "heading"
  | "bulleted-list"
  | "numbered-list"
  | "blockcode";

type Action =
  | { type: "TOGGLE_IS_RICH" }
  | { type: "SET_COMMUNITY"; communityId: string }
  | { type: "SET_TYPE"; postType: "text" | "link" }
  | { type: "SET_TITLE"; title: string }
  | { type: "SET_CONTENT"; content: Node[] }
  | { type: "SET_LINK"; link: string }
  | { type: "ACTIVATE_OPT"; name: RichOptions }
  | { type: "DEACTIVATE_OPT"; name: RichOptions }
  | { type: "TOGGLE_EXTRA"; name: "isOC" | "isSpoiler" | "isOver18" };

type Dispatch = (action: Action) => void;

type State = {
  isRich: boolean;
  activeOptions: string[];
  communityId: string;
  postType: "text" | "link";
  title: string;
  content: Node[];
  link: string;
  isOC: boolean;
  isSpoiler: boolean;
  isOver18: boolean;
};

type ProviderTypes = { children: React.ReactNode };

type ContextTypes = {
  state: State;
  createPostDispatch: Dispatch;
};

const initialState: State = {
  isRich: true,
  activeOptions: [],
  communityId: "",
  postType: "text",
  title: "",
  content: [{ type: "paragraph", children: [{ text: "" }] }],
  link: "",
  isOC: false,
  isSpoiler: false,
  isOver18: false,
};

const reducer = (state: State, action: Action): State => {
  const { isRich, activeOptions } = state;
  switch (action.type) {
    case "TOGGLE_IS_RICH":
      return { ...state, isRich: !isRich };
    case "SET_COMMUNITY":
      return { ...state, communityId: action.communityId };
    case "SET_TYPE":
      return { ...state, postType: action.postType };
    case "SET_TITLE":
      return { ...state, title: action.title };
    case "SET_CONTENT":
      return { ...state, content: action.content };
    case "SET_LINK":
      return { ...state, link: action.link };
    case "ACTIVATE_OPT":
      return { ...state, activeOptions: [...activeOptions, action.name] };
    case "DEACTIVATE_OPT":
      return {
        ...state,
        activeOptions: activeOptions.filter(a => a === action.name),
      };
    case "TOGGLE_EXTRA":
      return { ...state, [action.name]: !state[name] };
    default:
      return state;
  }
};

const CreatePostContext = createContext({} as ContextTypes);

export const useCreatePost = () => useContext(CreatePostContext);

export const CreatePostProvider = ({ children }: ProviderTypes) => {
  const [state, createPostDispatch] = useReducer(reducer, initialState);

  return (
    <CreatePostContext.Provider value={{ state, createPostDispatch }}>
      {children}
    </CreatePostContext.Provider>
  );
};
