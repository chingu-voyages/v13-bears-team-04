import React from "react";
import clsx from "clsx";
import FAIcon from "../FAIcon";

type Props = {
  msg: string;
  status: "error" | "success" | "default";
  mT?: number;
  mB?: number;
  handleClose: () => void;
};

export default function MessageBox({
  msg,
  status,
  mT = 0,
  mB = 0,
  handleClose,
}: Props) {
  if (!msg) return null;

  const marginTop = `${mT}px`;
  const marginBottom = `${mB}px`;
  const isSuccess = status === "success";
  const isError = status === "error";

  return (
    <div
      style={{ marginTop, marginBottom }}
      className={clsx(
        "message-box",
        { "message-box--error": isError },
        { "message-box--success": isSuccess }
      )}
    >
      {msg}
      <FAIcon
        onClick={handleClose}
        icon="times"
        className="message-box__icon"
      />
    </div>
  );
}
