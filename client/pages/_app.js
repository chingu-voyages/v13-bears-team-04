// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";
import { AuthProvider } from "../components/Auth/auth";
import "../utils/icons";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const { sid } = cookies(appContext.ctx);
    // if (sid) {
    const resp = await fetch("http://localhost:3000/api/verify", {
      method: "POST",
      body: JSON.stringify({ sid }),
      headers: { "Content-Type": "application/json" },
    });
    const user = await resp.json();
    // }
    const appProps = await App.getInitialProps(appContext);
    return { user, ...appProps };
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
