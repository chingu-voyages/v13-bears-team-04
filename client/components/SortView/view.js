import React from "react";

export default function View() {
  return (
    <>
      <div className="sortview__view">
        <div className="sortview__header">View</div>
        <div className="sortview__view__icons">
          <img
            className="sortview__view__icons__icon"
            src="sort-icons/card-icon.svg"
            alt="card sort"
          />
          <img
            className="sortview__view__icons__icon"
            src="sort-icons/classic-icon.svg"
            alt="classic sort"
          />
          <img
            className="sortview__view__icons__icon"
            src="sort-icons/compact-icon.svg"
            alt="compact sort"
          />
        </div>
      </div>
      <div className="sortview__divider" />
    </>
  );
}
