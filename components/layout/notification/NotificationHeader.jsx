"use client";
import React, { useState } from "react";
import NotificationIcon from "@/components/svg/header/NotificationIcon";
import NotificationSidebar from "./NotificationSidebar";

function NotificationHeader() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <button onClick={handleShow} className="btn btn--dark icon-button">
        <NotificationIcon />
      </button>
      <NotificationSidebar show={show} handleClose={handleClose} />
    </>
  );
}

export default NotificationHeader;
