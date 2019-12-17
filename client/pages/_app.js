// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";

import Nav from "../components/Nav";
import ToTopButton from "../components/ToTopButton";
import { AuthProvider } from "../utils/authcontext";
import { AuthPopupProvider } from "../contexts/authpopup";
import fetchIt from "../utils/fetch";

import "../utils/icons";
import "../sass/main.scss";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    try {
      const user = await fetchIt("/user/verify", { ctx: appContext.ctx });
      return { user, ...appProps };
    } catch (err) {
      return { user: null, ...appProps };
    }
  }

  render() {
    const { Component, pageProps, user } = this.props;
    return (
      <AuthProvider user={user}>
        <AuthPopupProvider>
          <Nav />
          <Component {...pageProps} />
          <ToTopButton />
        </AuthPopupProvider>
      </AuthProvider>
    );
  }
}

export default MyApp;
