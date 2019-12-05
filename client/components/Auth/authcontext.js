import React, { createContext, useState, useContext } from "react";
import { setCookie, destroyCookie } from "nookies";
import fetchIt from "../../utils/api";
import { getCookieOptions } from "../../utils/cookies";

const AuthContext = createContext();

// used to wrap all components in _app.js
export const AuthProvider = ({ children, user }) => {
  const authObj = useAuthSetter(user);

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

// can use this hook in any file to get our user and auth functions
// eg) const { user, setUser, login, logout, signup } = useAuth()
export const useAuth = () => useContext(AuthContext);

// custom auth hook
function useAuthSetter(initUser) {
  const [user, setUser] = useState(initUser);

  // logs user in, if successful
  // returns a success or error message string
  async function login({ username, password }) {
    try {
      const { sid, ...foundUser } = await fetchIt("/user/login", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      });
      // if successful, set cookie and user
      setCookie({}, "sid", sid, getCookieOptions());
      setUser(foundUser);
      return `Success! Welcome back ${user.username}`;
    } catch (err) {
      return err.message;
    }
  }

  // logs user in, if successful
  // returns a success or error message string
  async function logout({ userId }) {
    try {
      await fetchIt("/user/login", {
        method: "POST",
        body: JSON.stringify({ userId }),
        ctx: {},
      });
      // if successful, set cookie and user
      destroyCookie({}, "sid", {});
      setUser(null);
      return "Logged out successfully";
    } catch (err) {
      return err.message;
    }
  }

  // logs user in, if successful
  // returns a success or error message string
  async function signup({ username, password, email }) {
    try {
      const { sid, ...newUser } = await fetchIt("/user/signup", {
        method: "POST",
        body: JSON.stringify({ username, password, email }),
      });
      // if successful, set cookie and user
      setCookie({}, "sid", sid, getCookieOptions());
      setUser(newUser);
      return "Success! Welcome to our Reddit (clone)";
    } catch (err) {
      return err.message;
    }
  }

  return { user, setUser, login, logout, signup };
}
