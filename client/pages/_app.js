// https://nextjs.org/docs#custom-app

import React from "react";
import App from "next/app";
import "../utils/icons";
import "../sass/main.scss";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
