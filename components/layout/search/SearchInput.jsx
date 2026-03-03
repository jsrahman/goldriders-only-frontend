"use client";
import React from "react";
import SearchIcon from "../../svg/header/SearchIcon";

const SearchInput = React.forwardRef(
  ({ placeholder, value, onChange, onKeyDown }, ref) => {
    return (
      <div className="header__search">
        <span className="header__search-icon">
          <SearchIcon />
        </span>
        <input
          ref={ref}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          className="header__search-input"
          placeholder={placeholder}
          type="text"
        />
      </div>
    );
  }
);

SearchInput.displayName = "SearchInput";

export default SearchInput;
