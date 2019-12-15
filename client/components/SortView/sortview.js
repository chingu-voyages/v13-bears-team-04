import React from "react";
import Sort from "./sort";
import Divider from "./divider";
import View from "./view";
import "./sortview.scss";

export default function SortView() {
  return (
    <div className="sortview-container">
      <View />
      <Divider />
      <Sort />
    </div>
  );
}
