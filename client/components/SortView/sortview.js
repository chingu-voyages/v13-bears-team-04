import React from "react";

import CountryOptions from "./countryoptions";
import Sort from "./sort";
import View from "./view";

import "./sortview.scss";

export default function SortView() {
  return (
    <div className="sortview__container">
      <View />
      <Sort />
      <CountryOptions />
    </div>
  );
}
