import React from "react";
import Nav from "../components/nav";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import ToTopButton from "../components/ToTopButton";
import TrendingCommunity from "../components/TrendingCommunity";
import HomeBox from "../components/HomeBox";
import { useAuth } from "../components/Auth/auth";
// import { handleLogin, handleSignup, handleLogout } from "../utils/auth";

const Home = () => {
  const { user, setUser } = useAuth();
  console.log(user);

  async function handleLogin() {
    try {
      const resp = await fetch(`${process.env.API_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify({ username: "Tester2", password: "password" }),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const user = await resp.json();
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogout() {
    const userId = user._id;
    try {
      const resp = await fetch(`${process.env.API_URL}/user/logout`, {
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
      const resp = await fetch(`${process.env.API_URL}/user/signup`, {
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
      {/* eslint-disable-next-line react/button-has-type */}
      {!user && <button onClick={handleSignup}>Signup</button>}
      {/* eslint-disable-next-line react/button-has-type */}
      {!user && <button onClick={handleLogin}>Login</button>}
      {/* eslint-disable-next-line react/button-has-type */}
      {user && <button onClick={handleLogout}>Logout</button>}

      <Nav />
      <PostList />
      <TrendingCommunity />
      <RecentPosts />
      <HomeBox />
      <ToTopButton />
    </div>
  );
};

export default Home;
