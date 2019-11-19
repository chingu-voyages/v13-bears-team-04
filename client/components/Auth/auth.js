import React, {
  createContext,
  useEffect,
  useState,
  useCallback,
  useContext,
} from "react";

const AuthContext = createContext();

function useAuthSetter() {
  const [user, setUser] = useState(null);

  const login = () => console.log("login");
  const logout = () => console.log("logout");
  const register = () => console.log("register");
  const authenticate = () => console.log("authenticate");
  const login = () => console.log("login");

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
export const AuthProvider = ({ children }) => {
  const authObj = useAuthSetter();

  return (
    <AuthContext.Provider value={authObj}>{children}</AuthContext.Provider>
  );
};

// can use this hook in any file to get our user and auth functions
export const useAuth = () => useContext(AuthContext);
