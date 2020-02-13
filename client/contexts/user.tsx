import React, { createContext, useContext, useReducer } from "react";
import { setCookie, destroyCookie } from "nookies";
import fetchIt from "../utils/fetch";
import getCookieOptions from "../utils/cookies";
import { UserType } from "../types/user";

const initialUser = {
  _id: "",
  username: "",
  email: "",
  posts: [],
  comments: [],
  communities: {
    member: [],
    moderator: [],
    administrator: [],
  },
  createdOn: "",
};

type Action = { type: "SET_USER"; user: UserType } | { type: "REMOVE_USER" };

type Dispatch = (action: Action) => void;

type State = {
  isAuthenticated: boolean;
  user: User;
  setUser: Dispatch;
  login: (obj: Login) => void;
  logout: (obj: Logout) => void;
  signup: (obj: Signup) => void;
};

type ProviderTypes = {
  isAuthenticated?: boolean;
  user?: User;
  children: React.ReactNode;
};

export type InitProps = {
  isAuthenticated: boolean;
  user: User;
};

const init: (props: InitProps) => InitProps = ({ isAuthenticated, user }) => ({
  isAuthenticated,
  user,
});

const reducer = (state: InitProps, action: Action): InitProps => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, isAuthenticated: true, user: action.user };
    case "REMOVE_USER":
      return { ...state, isAuthenticated: false, user: initialUser };
    default:
      return state;
  }
};

type Email = string;
type Password = string;
type UserId = string;
type Username = string;
type User = UserType;

type Login = {
  username: Username;
  password: Password;
};

type Logout = {
  userId: UserId;
};

type Signup = {
  username: Username;
  password: Password;
  email: Email;
};

// custom auth hook
function useUserSetter(initUser: InitProps): State {
  const [{ isAuthenticated, user }, setUser] = useReducer(
    reducer,
    initUser,
    init
  );

  // logs user in, if successful
  // returns a success or error message string
  async function login({ username, password }: Login): Promise<string> {
    try {
      const { sid, ...foundUser } = await fetchIt("/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      // if successful, set cookie and user
      setCookie({}, "sid", sid, getCookieOptions());
      setUser({ type: "SET_USER", user: foundUser });
      return `Success! Welcome back ${foundUser.username}`;
    } catch (err) {
      return err.message;
    }
  }

  // logs a user out and deletes session cookie, if successful
  // returns a success or error message string
  async function logout({ userId }: Logout): Promise<string> {
    try {
      await fetchIt("/user/logout", {
        method: "POST",
        body: JSON.stringify({ userId }),
        ctx: {},
      });
      // if successful, set cookie and user
      destroyCookie({}, "sid", {});
      setUser({ type: "REMOVE_USER" });
      return "Logged out successfully";
    } catch (err) {
      return err.message;
    }
  }

  // creates a new user account, if successful
  // returns a success or error message string
  async function signup({
    username,
    password,
    email,
  }: Signup): Promise<string> {
    try {
      const { sid, ...newUser } = await fetchIt("/user/signup", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
      });
      // if successful, set cookie and user
      setCookie({}, "sid", sid, getCookieOptions());
      setUser({ type: "SET_USER", user: newUser });
      return "Success! Welcome to our Reddit... clone";
    } catch (err) {
      return err.message;
    }
  }

  return { isAuthenticated, user, setUser, login, logout, signup };
}

const UserContext = createContext({} as State);

// used to wrap all components in _app.js
export const UserProvider = ({
  children,
  isAuthenticated = false,
  user = initialUser,
}: ProviderTypes): JSX.Element => {
  const userObj = useUserSetter({ isAuthenticated, user });

  return (
    <UserContext.Provider value={userObj}>{children}</UserContext.Provider>
  );
};

// can use this hook in any file to get our user and auth functions
// eg) const { user, setUser, login, logout, signup } = useUser()
export const useUser = (): State => useContext(UserContext);
