import React from "react";

export default function View() {
  return (
    <div className="view">
      <h2>View</h2>
      <img
        className="view__img"
        src="sort-icons/card-icon.svg"
        alt="card sort"
      />
      <img
        className="view__img"
        src="sort-icons/classic-icon.svg"
        alt="classic sort"
      />
      <img
        className="view__img"
        src="sort-icons/compact-icon.svg"
        alt="compact sort"
      />
      <div className="view--border-right">&nbsp;</div>
    </div>
  );
}
