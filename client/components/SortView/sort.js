import React, { useState } from "react";
import CustomSortSelect from "./customsortselect";
import { sortOptions, countryOptions, dateOptions } from "./optionsdata";

export default function Sort() {
  const [sortSelection, setSortSelection] = useState(sortOptions[0]);
  const [countrySelection, setCountrySelection] = useState(countryOptions[0]);
  const [dateSelection, setDateSelection] = useState(dateOptions[0]);

  const { value } = sortSelection;

  return (
    <div className="sortview__sort">
      <h2 className="sortview__header">Sort</h2>
      <CustomSortSelect
        handleChange={selection => setSortSelection(selection)}
        selection={sortSelection}
        options={sortOptions}
      />
      {/* if hot posts are shown then allow user filter by country */}
      {value === "hot" && (
        <CustomSortSelect
          handleChange={selection => setCountrySelection(selection)}
          selection={countrySelection}
          options={countryOptions}
        />
      )}
      {/* if top posts are shown then allow user to sort by 'date' */}
      {(value === "controversial" || value === "top") && (
        <CustomSortSelect
          handleChange={selection => setDateSelection(selection)}
          selection={dateSelection}
          options={dateOptions}
        />
      )}
    </div>
  );
}
