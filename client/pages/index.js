import React from "react";
import { setCookie, destroyCookie } from "nookies";

import HomeBox from "../components/HomeBox";
import Nav from "../components/Navigation";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import ToTopButton from "../components/ToTopButton";
import TrendingCommunity from "../components/TrendingCommunity";
import GrowingCommunities from "../components/GrowingCommunities";

import { useAuth } from "../components/Auth/auth";
import fetchIt from "../utils/api";
import { getCookieOptions } from "../utils/cookies";
// import { handleLogin, handleSignup, handleLogout } from "../utils/auth";

const Home = () => {
  const { user, setUser } = useAuth();

  async function handleLogin() {
    try {
      const { sid, ...user } = await fetchIt("/user/login", {
        method: "POST",
        body: JSON.stringify({
          username: "Tester2",
          password: "password",
        }),
      });
      setCookie({}, "sid", sid, getCookieOptions());
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleLogout() {
    const userId = user._id;
    try {
      const { message } = await fetchIt("/user/logout", {
        method: "POST",
        body: JSON.stringify({ userId }),
      });
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
      const { sid, ...user } = await fetchIt("/user/signup", {
        method: "POST",
        body: JSON.stringify({
          email: `test${randomNum}@test.com`,
          username: `Tester${randomNum}`,
          password: "password",
        }),
      });
      setCookie({}, "sid", sid, getCookieOptions());
      setUser(user);
    } catch (err) {
      console.log(err);
    }
  }

  async function createPost() {
    try {
      const newPost = await fetchIt("/posts/5de36fb689277400f03f364d", {
        method: "POST",
        body: JSON.stringify({
          title: "Suppppp",
          body: "Howwwwwwdy",
          author: user._id,
          community: "5de36fb689277400f03f364d",
        }),
      });
      console.log(newPost);
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
      {/* eslint-disable-next-line react/button-has-type */}
      {user && <button onClick={createPost}>Create Post</button>}

      <Nav />
      <PostList />
      <TrendingCommunity />
      <GrowingCommunities />
      <RecentPosts />
      <HomeBox />
      <ToTopButton />
    </div>
  );
};

export default Home;
