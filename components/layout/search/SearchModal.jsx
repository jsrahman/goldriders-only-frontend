"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import { useUiStore } from "@/store/ui.store";
import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap";
import SearchInput from "./SearchInput";
import DefaultSearch from "./DefaultSearch";
import SearchList from "./SearchList";

import { gameListData } from "@/public/data/gameList";
import { useTranslations } from "next-intl";

const SearchModal = () => {
  const { ui, setUi } = useUiStore();
  const t = useTranslations();
  const [search, setSearch] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const inputRef = useRef(null);

  // Filter games based on search
  const filteredGames = search
    ? gameListData.filter((game) =>
      game.name.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  function handleClose() {
    setUi({
      isSearchModalOpen: false,
    });
    setSearch("");
    setActiveIndex(-1);
  }

  // Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setUi({
          isSearchModalOpen: !ui?.isSearchModalOpen,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [ui?.isSearchModalOpen, setUi]);

  // Focus input when modal opens
  useEffect(() => {
    if (ui?.isSearchModalOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 100);
    }
  }, [ui?.isSearchModalOpen]);

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!search) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev < filteredGames.length - 1 ? prev + 1 : 0
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        prev > 0 ? prev - 1 : filteredGames.length - 1
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIndex >= 0 && filteredGames[activeIndex]) {
        handleSelect(filteredGames[activeIndex]);
      }
    }
  };

  const handleSelect = (item) => {
    // Logic for selection (e.g., navigation)
    console.log("Selected game:", item);
    // You can add router.push here if you have a route
    handleClose();
  };

  return (
    <>
      <Modal
        show={ui?.isSearchModalOpen}
        className="search-modal"
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>{t("sidebar.searchForGame")}</Modal.Title>
          <button className="modal-close" onClick={handleClose}>
            <CloseIcon />
          </button>
        </Modal.Header>
        <Modal.Body>
          <form
            className="search-modal__form"
            action=""
            onSubmit={(e) => e.preventDefault()}
          >
            <SearchInput
              ref={inputRef}
              placeholder={t("sidebar.searchForGame")}
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setActiveIndex(-1);
              }}
              onKeyDown={handleKeyDown}
            />
          </form>
          {search ? (
            <SearchList
              data={filteredGames}
              activeIndex={activeIndex}
              onSelect={handleSelect}
            />
          ) : (
            <DefaultSearch />
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchModal;
