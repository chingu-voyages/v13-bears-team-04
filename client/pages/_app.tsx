// https://nextjs.org/docs#custom-app

import React from "react";
import App, { AppProps, AppContext } from "next/app";

import Nav from "../components/Nav";
import { AuthPopupProvider } from "../contexts/authpopup";
import { UserProvider } from "../contexts/user";
import { UserType } from "../types/user";

import fetchIt from "../utils/fetch";
import "../utils/icons";
import "../sass/main.scss";

type Props = AppProps & {
  user?: UserType;
  isAuthenticated?: boolean;
};

const MyApp = ({
  Component,
  pageProps,
  user,
  isAuthenticated,
}: Props): React.ReactNode => (
  <UserProvider user={user} isAuthenticated={isAuthenticated}>
    <AuthPopupProvider>
      <Nav />
      <div style={{ marginTop: "4.9rem", height: "calc(100vh - 49px)" }}>
        <Component {...pageProps} />
      </div>
    </AuthPopupProvider>
  </UserProvider>
);

MyApp.getInitialProps = async (appContext: AppContext): Promise<{}> => {
  // this calls the getInitialProps on individual pages components
  const appProps = await App.getInitialProps(appContext);
  try {
    // we only want to verify the user on the first page load..
    // .. so, we'll skip subsequent client side page loads here
    if (!appContext.ctx) throw new Error("Client side; skip fetch");
    // verify user through their sessionId stored in a cookie
    const user = await fetchIt("/user/verify", { ctx: appContext.ctx });
    console.log(user);
    return { isAuthenticated: true, user, ...appProps };
  } catch (err) {
    return { ...appProps };
  }
};

export default MyApp;
