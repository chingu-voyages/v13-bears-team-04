import React, { createContext, useContext, useReducer, useEffect } from "react";
import { UserType } from "../types/user";

type ReducerState = {
  isAuthenticated: boolean;
  token: string;
  user: UserType;
};

const initialReducerState = {
  isAuthenticated: false,
  token: "",
  user: {
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
  },
};

type ReducerAction =
  | { type: "SET_USER"; token: string; user: UserType }
  | { type: "REMOVE_USER" };

const reducer = (state: ReducerState, action: ReducerAction): ReducerState => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        isAuthenticated: true,
        token: action.token,
        user: action.user,
      };
    case "REMOVE_USER":
      return initialReducerState;
    default:
      return state;
  }
};

type Login = {
  username: string;
  password: string;
};

type Signup = {
  username: string;
  password: string;
  email: string;
};

type UseUserSetterState = ReducerState & {
  setUser: (action: ReducerAction) => void;
  login: (obj: Login) => void;
  logout: () => void;
  signup: (obj: Signup) => void;
};

// custom auth hook
function useUserSetter(): UseUserSetterState {
  const [state, setUser] = useReducer(reducer, initialReducerState);
  const { isAuthenticated, user, token } = state;

  // on mounting we'll check if there was a user previously logged ...
  // ... in through cookies and if valid, log them back in
  useEffect(() => {
    async function checkForUser() {
      try {
        const resp = await fetch("/api/verify");

        const data = await resp.json();
        if (!resp.ok) throw data;

        const { token, user } = data;
        setUser({ type: "SET_USER", token, user });
      } catch (err) {
        console.log(err);
      }
    }

    checkForUser();
  }, []);

  // logs user in, if successful
  // returns a success or error message string
  async function login({ username, password }: Login): Promise<string> {
    try {
      const resp = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resp.json();
      if (!resp.ok) throw data;

      const { token, user } = data;
      setUser({ type: "SET_USER", token, user });

      return `Success! Welcome back ${user.username}`;
    } catch (err) {
      return err.message;
    }
  }

  // logs a user out and deletes session cookie, if successful
  // returns a success or error message string
  async function logout(): Promise<string> {
    try {
      const resp = await fetch("/api/logout", {
        method: "POST",
        body: JSON.stringify({ token }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resp.json();
      if (!resp.ok) throw data;

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
      const resp = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await resp.json();
      if (!resp.ok) throw data;

      const { token, user } = data;
      setUser({ type: "SET_USER", token, user });

      return "Success! Welcome to our Reddit... clone";
    } catch (err) {
      return err.message;
    }
  }

  return { isAuthenticated, user, setUser, login, logout, signup, token };
}

const UserContext = createContext({} as UseUserSetterState);

type ProviderTypes = {
  children: React.ReactNode;
};

// used to wrap all components in _app.js
export const UserProvider = ({ children }: ProviderTypes): JSX.Element => {
  const user = useUserSetter();

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

// can use this hook in any file to get our user and auth functions
// eg) const { user, setUser, login, logout, signup } = useUser()
export const useUser = (): UseUserSetterState => useContext(UserContext);
