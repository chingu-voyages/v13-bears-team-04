import React from "react";
import { AppProps } from "next/app";

import Nav from "../components/Nav";
import { AuthPopupProvider } from "../contexts/authpopup";
import { UserProvider } from "../contexts/user";

import "../utils/icons";
import "../sass/main.scss";

const App = ({ Component, pageProps }: AppProps): React.ReactNode => (
  <UserProvider>
    <AuthPopupProvider>
      <Nav />
      <div style={{ marginTop: "4.9rem", height: "calc(100vh - 49px)" }}>
        <Component {...pageProps} />
      </div>
    </AuthPopupProvider>
  </UserProvider>
);

export default App;
