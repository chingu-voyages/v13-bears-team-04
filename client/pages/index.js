import React from "react";
import { setCookie, destroyCookie } from "nookies";

import HomeBox from "../components/HomeBox";
import Nav from "../components/Navigation";
import PostList from "../components/PostList";
import RecentPosts from "../components/RecentPosts";
import ToTopButton from "../components/ToTopButton";
import TrendingCommunity from "../components/TrendingCommunity";
import GrowingCommunities from "../components/GrowingCommunities";

import { useAuth } from "../components/Auth";
import fetchIt from "../utils/fetch";
import { getCookieOptions } from "../utils/cookies";

const Home = () => {
  const { user, setUser, login, logout, signup } = useAuth();

  async function handleLogin() {
    const username = "Tester2";
    const password = "password";
    const resp = await login({ username, password });
    console.log(resp);
  }

  async function handleLogout() {
    // const userId = user._id;
    // try {
    //   const { message } = await fetchIt("/user/logout", {
    //     method: "POST",
    //     body: JSON.stringify({ userId }),
    //   });
    //   if (message === "Successful logout") {
    //     destroyCookie({}, "sid", {});
    //     setUser(null);
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }

  async function handleSignup() {
    const randomNum = Math.floor(Math.random() * 90 + 10);
    const email = `test${randomNum}@test.com`;
    const username = `Tester${randomNum}`;
    const password = "password";
    const resp = signup({ email, username, password });
    console.log(resp);
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
