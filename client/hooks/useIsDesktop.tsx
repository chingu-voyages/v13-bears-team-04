import { useWindowWidth } from "@react-hook/window-size/throttled";

type Func = (arg: number) => boolean;

const useIsDesktop: Func = (initialWidth: number) => {
  const width = useWindowWidth(initialWidth);

  return width > 768;
};

export default useIsDesktop;
