import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavSearch() {
  const [value, setValue] = useState("");

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    console.log(`search the api for ${value}`);
  }, []);

  const handleChange = useCallback(e => setValue(e.target.value), [setValue]);

  return (
    <form className="nav__item__search" onSubmit={handleSubmit} role="search">
      <label htmlFor="site-search-bar">
        <FontAwesomeIcon
          icon="search"
          className="nav__item__search__label__icon"
        />
        <input
          id="site-search-bar"
          className="nav__item__search__input"
          type="search"
          onChange={handleChange}
          value={value}
          placeholder="Search Reddit"
        />
      </label>
    </form>
  );
}
