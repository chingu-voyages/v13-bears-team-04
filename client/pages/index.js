import React from "react";
import Nav from "../components/nav";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import ToTopButton from "../components/ToTopButton";
import TrendingCommunity from "../components/TrendingCommunity";
import HomeBox from "../components/HomeBox";
import { useAuth } from "../components/Auth/auth";
import { setCookie, destroyCookie } from "nookies";
import { getCookieOptions } from "../utils/cookies";
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
      });
      const { sid, ...user } = await resp.json();
      setCookie({}, "sid", sid, getCookieOptions());
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
      });
      const { message } = await resp.json();
      if (message === "Successful logout") {
        destroyCookie({}, "sid", {});
        setUser(null);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function handleSignup() {
    try {
      const randomNum = Math.floor(Math.random() * 90 + 10);
      const resp = await fetch(`${process.env.API_URL}/user/signup`, {
        method: "POST",
        body: JSON.stringify({
          email: `test${randomNum}@test.com`,
          username: `Tester${randomNum}`,
          password: "password",
        }),
        headers: { "Content-Type": "application/json" },
      });
      const { sid, ...user } = await resp.json();
      setCookie({}, "sid", sid, getCookieOptions());
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
      <ToTopButton />
      <TrendingCommunity />
      <RecentPosts />
      <HomeBox />
    </div>
  );
};

export default Home;
