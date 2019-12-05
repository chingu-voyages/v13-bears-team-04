// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";
import { AuthProvider } from "../components/Auth";
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
      console.log(err);
      return { user: null, ...appProps };
    }
  }

  render() {
    const { Component, pageProps, user } = this.props;
    return (
      <AuthProvider user={user}>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
}

export default MyApp;
