import React from "react";
import NavQuickLinksLink from "./navquicklinkslink";

const NavQuickLinks = () => (
  <div className="nav__item__quicklinks">
    <NavQuickLinksLink href="/" title="Popular" icon="chart-line" />
    <NavQuickLinksLink href="/all" title="All" icon="poll" />
  </div>
);

export default NavQuickLinks;
