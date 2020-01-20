import { useCallback, useLayoutEffect } from "react";

type Key = string;
type Prop = string;
type Keys = { [varName: string]: string };

export default function useSetCSSVariable(key: Key | Keys, property?: Prop) {
  const setter = useCallback(
    (k, p) => document.documentElement.style.setProperty(`${k}`, `${p}`),
    []
  );

  useLayoutEffect(() => {
    if (typeof key === "string") return setter(key, property);
    Object.keys(key).map(k => setter(k, key[k]));
  }, [key, property]);
}
