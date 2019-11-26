import React from "react";
import Nav from "../components/nav";
import PostList from "../components/postlist";
import ToTopButton from "../components/totopbutton";
import TrendingCommunity from "../components/TrendingCommunity";
import { useAuth } from "../components/Auth/auth";
// import { handleLogin, handleSignup, handleLogout } from "../utils/auth";

const Home = () => {
  const { user, setUser } = useAuth();
  console.log(user);

  async function handleLogin(e) {
    try {
      const resp = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        body: JSON.stringify({ username: "Tester2", password: "password" }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const user = await resp.json();
      setUser(user);
    } catch (err) {
      console.log(e);
    }
  }

  async function handleLogout() {
    const userId = user._id;
    try {
      const resp = await fetch("http://localhost:3000/api/user/logout", {
        method: "POST",
        body: JSON.stringify({ userId }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      // const user = await resp.json();
      setUser(null);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSignup() {
    try {
      const resp = await fetch("http://localhost:3000/api/user/signup", {
        method: "POST",
        body: JSON.stringify({
          email: "test9@test.com",
          username: "Tester9",
          password: "password",
        }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const user = await resp.json();
      console.log(user);
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      {!user && <button onClick={handleSignup}>Signup</button>}
      {!user && <button onClick={handleLogin}>Login</button>}
      {user && <button onClick={handleLogout}>Logout</button>}

      <Nav />
      <PostList />
      <ToTopButton />
      <TrendingCommunity />
    </div>
  );
};

export default Home;
