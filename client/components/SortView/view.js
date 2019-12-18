import React from "react";

const View = () => (
  <div className="sortview__view">
    <div className="sortview__header">View</div>
    <div className="sortview__view__icons">
      <button type="button" className="sortview__view__icons__btn">
        <img
          className="sortview__view__icons__btn__icon"
          src="sort-icons/card-icon.svg"
          alt="card sort"
        />
      </button>
      <button type="button" className="sortview__view__icons__btn">
        <img
          className="sortview__view__icons__btn__icon"
          src="sort-icons/classic-icon.svg"
          alt="classic sort"
        />
      </button>
      <button type="button" className="sortview__view__icons__btn">
        <img
          className="sortview__view__icons__btn__icon"
          src="sort-icons/compact-icon.svg"
          alt="compact sort"
        />
      </button>
    </div>
  </div>
);

export default View;
