import React, {
  createContext,
  useEffect,
  useState,
  // useCallback,
  useContext,
} from "react";

const AuthContext = createContext();

function useAuthSetter(initUser) {
  const [user, setUser] = useState(initUser);

  const login = () => console.log("login");
  const logout = () => console.log("logout");
  const register = () => console.log("register");
  const authenticate = () => console.log("authenticate");

  useEffect(() => {
    // on mount, check if the user is authenticated
  }, []);

  return {
    user,
    setUser,
    login,
    logout,
    register,
    authenticate,
  };
}

// used to wrap all components in _app.js
export const AuthProvider = ({ children, user }) => {
  const authObj = useAuthSetter(user);

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

// can use this hook in any file to get our user and auth functions
export const useAuth = () => useContext(AuthContext);
