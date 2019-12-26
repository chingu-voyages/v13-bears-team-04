// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";

import Nav from "../components/Nav";
import ToTopButton from "../components/ToTopButton";
import { UserProvider } from "../contexts/user";
import { AuthPopupProvider } from "../contexts/authpopup";
import fetchIt from "../utils/fetch";

import "../utils/icons";
import "../sass/main.scss";

const MyApp = ({ Component, pageProps, user }) => (
  <UserProvider user={user}>
    <AuthPopupProvider>
      <Nav />
      <div style={{ marginTop: "4.9rem" }}>
        <Component {...pageProps} />
      </div>
      <ToTopButton />
    </AuthPopupProvider>
  </UserProvider>
);

MyApp.getInitialProps = async appContext => {
  // this calls the getInitialProps on individual pages components
  const appProps = await App.getInitialProps(appContext);
  try {
    // we only want to verify the user on the first page load..
    // .. so, we'll skip subsequent client side page loads here
    if (!appContext.ctx) throw new Error("Client side; skip fetch");
    // verify user through their sessionId stored in a cookie
    const user = await fetchIt("/user/verify", { ctx: appContext.ctx });
    return { user, ...appProps };
  } catch (err) {
    return { user: null, ...appProps };
  }
};

export default MyApp;
