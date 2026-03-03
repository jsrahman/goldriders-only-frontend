"use client";
import React from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../svg/others/CloseIcon";
import DropDown from "./DropDown";
import { useUiStore } from "@/store/ui.store";
import MoneyIcon from "../svg/others/MoneyIcon";
import { useTranslations } from "next-intl";

const dropdownData = [
  {
    id: 0,
    name: "Account",
    url: "/profile",
  },
  {
    id: 1,
    name: "Affiliate",
    url: "/affiliate",
  },
];

const WithDrawRewards = () => {
  const { ui, setUi } = useUiStore();
  const t = useTranslations("withdraw");
  const handleClose = () => {
    setUi({ isWithdrawRewardsModalOpen: false });
  };

  return (
    <Modal
      show={ui.isWithdrawRewardsModalOpen}
      className="withdraw-modal mt-5"
      onHide={handleClose}
    >
      <Modal.Header className="flex-between p-0">
        <Modal.Title>{t("title")}</Modal.Title>
        <button className="modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>
      </Modal.Header>
      <Modal.Body className="p-0 mt-20">
        <DropDown data={dropdownData} />
        <div className="request-info">
          <p className="name">{t("amount")}</p>
          <p className="amount">$0.00</p>
        </div>
        <button className="btn btn--base w-100 " onClick={handleClose}>
          <MoneyIcon /> {t("btn")}
        </button>
      </Modal.Body>
    </Modal>
  );
};

export default WithDrawRewards;
