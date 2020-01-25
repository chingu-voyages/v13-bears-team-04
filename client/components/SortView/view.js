import React from "react";
import { CardIcon, ClassicIcon, CompactIcon } from "../../svgs";

const View = () => (
  <div className="sortview__view">
    <div className="sortview__header">View</div>
    <div className="sortview__view__icons">
      <button type="button" className="sortview__view__icons__btn">
        <CardIcon className="sortview__view__icons__btn__icon" />
      </button>
      <button type="button" className="sortview__view__icons__btn">
        <ClassicIcon className="sortview__view__icons__btn__icon" />
      </button>
      <button type="button" className="sortview__view__icons__btn">
        <CompactIcon className="sortview__view__icons__btn__icon" />
      </button>
    </div>
  </div>
);

export default View;
