import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  communityId: "",
  postType: "text",
  title: "",
  content: "",
  file: null,
  link: "",
  isOC: false,
  isSpoiler: false,
  isOver18: false,
};

const reducer = (state, action) => {
  const { type, communityId, postType, name, field } = action;
  console.log(action);
  switch (type) {
    case "SET_COMMUNITY":
      return { ...state, communityId };
    case "SET_TYPE":
      return { ...state, postType };
    case "SET_FIELD":
      return { ...state, [field]: !state[field] };
    case "TOGGLE":
      return { ...state, [name]: !state[name] };
    // case "SET_COMMUNITY":
    //   return { ...state, communityId };
    // case "SET_COMMUNITY":
    //   return { ...state, communityId };

    default:
      return state;
  }
};

const CreatePostContext = createContext();

export const useCreatePost = () => useContext(CreatePostContext);

export const CreatePostProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CreatePostContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CreatePostContext.Provider>
  );
};
