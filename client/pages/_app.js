// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";
import fetch from "isomorphic-unfetch";
import cookies from "next-cookies";
import { AuthProvider } from "../components/Auth/auth";
import "../utils/icons";
import "../sass/main.scss";

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    try {
      // check if there are any cookies
      const { sid } = cookies(appContext.ctx);
      if (!sid) throw "No cookies found on page load";
      const resp = await fetch(process.env.API_URL + "/user/verify", {
        method: "POST",
        body: JSON.stringify({ sid }),
        headers: { "Content-Type": "application/json" },
      });
      const user = await resp.json();
      if (!resp.ok) throw "Cookie found; failed verification";
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
