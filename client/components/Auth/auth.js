import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

// used to wrap all components in _app.js
export const AuthProvider = ({ children, user }) => {
  const authObj = useAuthSetter(user);

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

// can use this hook in any file to get our user and auth functions
// eg) const { user } = useAuth()
export const useAuth = () => useContext(AuthContext);

// custom auth hook
function useAuthSetter(initUser) {
  const [user, setUser] = useState(initUser);

  const login = () => console.log("login");
  const logout = () => console.log("logout");
  const register = () => console.log("register");

  return {
    user,
    setUser,
    login,
    logout,
    register,
  };
}
