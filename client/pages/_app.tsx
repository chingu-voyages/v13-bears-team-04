import React from "react";
import { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";

import Nav from "../components/Nav";
import Notification from "../components/Notification";
import { AuthPopupProvider } from "../contexts/authpopup";
import { UserProvider } from "../contexts/user";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "../utils/icons";
import "../sass/main.scss";

config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <UserProvider>
    <AuthPopupProvider>
      <Nav />
      <div style={{ marginTop: "4.9rem", minHeight: "calc(100vh - 49px)" }}>
        <Component {...pageProps} />
      </div>
      <Notification />
    </AuthPopupProvider>
  </UserProvider>
);

export default App;
