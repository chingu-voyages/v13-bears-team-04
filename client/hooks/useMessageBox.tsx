import { useState } from "react";

type State = {
  msg: string;
  status: "error" | "success" | "default";
};

export default function useMessageBox() {
  const [{ msg, status }, setInfo] = useState<State>({
    msg: "",
    status: "default",
  });

  return { msg, status, setInfo };
}
