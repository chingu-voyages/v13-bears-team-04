import React from "react";

import Layout from "../components/Layout";
import Nav from "../components/Nav";
import SubredditInfo from "../components/SubredditInfo";
import FooterBox from "../components/FooterBox";

import { useAuth } from "../utils/authcontext";
import fetchIt from "../utils/fetch";

const SinglePost = () => {
  const { user, login, logout, signup } = useAuth();

  async function handleLogin() {
    const username = "Tester2";
    const password = "password";
    const message = await login({ username, password });
    console.log(message);
  }

  async function handleLogout() {
    const userId = user._id;
    const message = await logout({ userId });
    console.log(message);
  }

  async function handleSignup() {
    const randomNum = Math.floor(Math.random() * 90 + 10);
    const email = `test${randomNum}@test.com`;
    const username = `Tester${randomNum}`;
    const password = "password";
    const message = await signup({ email, username, password });
    console.log(message);
  }

  async function createPost() {
    try {
      const randomNum = Math.floor(Math.random() * 1000);
      const communityId = "5de36fb689277400f03f364d";
      const newPost = await fetchIt(`/posts/${communityId}`, {
        method: "POST",
        body: JSON.stringify({
          title: `Suppppp${randomNum}`,
          body: "Howwwwwwdy",
          author: user._id,
          community: communityId,
        }),
        ctx: {},
      });
      console.log(newPost);
    } catch (err) {
      console.log(err.message);
    }
  }

  return (
    <div>
      <Nav />
      <SubredditInfo />
      {!user && (
        <button type="button" onClick={handleSignup}>
          Signup
        </button>
      )}
      {!user && (
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      )}
      {user && (
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      )}
      {user && (
        <button type="button" onClick={createPost}>
          Create Post
        </button>
      )}
    </div>
  );
};

export default SinglePost;
