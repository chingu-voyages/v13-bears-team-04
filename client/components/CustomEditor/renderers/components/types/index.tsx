type ChildrenType = { children: React.ReactNode };

export type SpoilerTypes = ChildrenType & {
  attributes: React.HTMLAttributes<HTMLSpanElement>;
  children: React.ReactNode;
  leaf: {
    bold?: boolean;
    italic?: boolean;
    strike?: boolean;
    spoiler?: boolean;
    code?: boolean;
    underline?: boolean;
  };
};

export type LeafTypes = ChildrenType &
  SpoilerTypes & {
    spoilerStyles?: {
      background: string;
      borderRadius: string;
      cursor: string;
    };
    toggleSpoiler?: () => void;
  };

export type LinkTypes = ChildrenType & {
  attributes: React.HTMLAttributes<HTMLAnchorElement>;
  element: {
    url: string;
  };
};

export type CodeTypes = ChildrenType &
  SpoilerTypes & {
    attributes: React.HTMLAttributes<HTMLElement>;
  };
