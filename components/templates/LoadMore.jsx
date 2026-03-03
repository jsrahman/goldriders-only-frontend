import React from "react";
import ReloadIcon from "../svg/others/ReloadIcon";

export default function LoadMore({ loading, cb }) {
  return (
    <button
      className={`load-more-btn btn btn--dark text-center mx-auto ${
        loading ? "loading disabled" : ""
      }`}
      onClick={cb}
    >
      <ReloadIcon /> LOAD MORE
    </button>
  );
}
