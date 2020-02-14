import React from "react";
import Button from "../Button";
import { useAuthPopup } from "../../contexts/authpopup";

type Props = {
  cxBtn?: string;
};

export default function AuthButtons({ cxBtn }: Props): JSX.Element {
  const { setAuthPopup } = useAuthPopup();
  return (
    <>
      <Button
        cx={cxBtn}
        handleClick={(): void => setAuthPopup("signin")}
        inverted
        text="log in"
      />
      <Button
        cx={cxBtn}
        handleClick={(): void => setAuthPopup("signup")}
        text="sign up"
      />
    </>
  );
}
