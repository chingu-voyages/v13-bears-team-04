import { customFetch } from "./api";

const sameOpts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  credentials: "include",
};

async function handleLogin({ username, password }) {
  try {
    const body = JSON.stringify({ username, password });
    const options = { ...sameOpts, body };
    const user = await customFetch("/user/login", options);
    return user;
  } catch (err) {
    console.log(e);
    return null;
  }
}

async function handleLogout() {
  console.log(user);
  const userId = user._id;
  try {
    const resp = await fetch("http://localhost:3000/api/user/logout", {
      method: "POST",
      body: JSON.stringify({ userId }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    console.log(resp);
    console.log(resp.headers);
    const user = await resp.json();
    console.log(user);
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
    console.log(resp);
    console.log(resp.headers);
    const user = await resp.json();
    console.log(user);
    setUser(user);
  } catch (err) {
    console.log(err);
  }
}

export { handleLogin, handleLogout, handleSignup };
