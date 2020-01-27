import { useState, useCallback } from "react";

export type State = {
  msg: string;
  status: "error" | "success" | "default";
};

const initialState: State = {
  msg: "",
  status: "default",
};

export default function useMessageBox() {
  const [{ msg, status }, setMessageBox] = useState(initialState);

  const resetMessageBox = useCallback(() => setMessageBox(initialState), []);

  return { msg, status, setMessageBox, resetMessageBox };
}
