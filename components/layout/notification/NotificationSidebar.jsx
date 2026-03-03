"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import React from "react";
import { Offcanvas } from "react-bootstrap";
import NotificationItem from "./NotificationItem";
import { notificationData } from "@/public/data/notification";
import { useTranslations } from "next-intl";

const NotificationSidebar = ({ show, handleClose }) => {
  const t = useTranslations();
  return (
    <Offcanvas
      className="custom offcanvas"
      show={show}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header className="flex-between">
        <Offcanvas.Title>{t("common.notification")}</Offcanvas.Title>
        <button onClick={handleClose} className="btn icon-button btn--dark">
          <CloseIcon />
        </button>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {notificationData.map((item, index) => (
          <NotificationItem key={index} {...item} />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default NotificationSidebar;
