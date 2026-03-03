"use client";
import React from "react";
import { useUiStore } from "@/store/ui.store";
import SearchIcon from "@/components/svg/header/SearchIcon";

const SearchButton = ({ text }) => {
  const { setUi } = useUiStore();
  function handleInputModal() {
    setUi({
      isSearchModalOpen: true,
    });
  }

  return (
    <button type="button" onClick={handleInputModal} className="header__search">
      <span className="header__search-icon">
        <SearchIcon />
      </span>
      <span className="header__search-text">{text}</span>
    </button>
  );
};

export default SearchButton;
