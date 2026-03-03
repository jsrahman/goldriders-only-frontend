"use client";
import React from "react";
import { useTranslations } from "next-intl";
import CloseIcon from "@/components/svg/others/CloseIcon";
import { Modal } from "react-bootstrap";
import DepositTab from "./Deposit/DepositTab";
import WithdrawTab from "./WithdrawTab";
import { useUiStore } from "@/store/ui.store";
import DepositProgress from "./Deposit/DepositProgress";
import TransactionDetails from "./Deposit/TransactionDetails";
import Feedback from "./Deposit/Feedback";
import DepositPreview from "./Deposit/DepositPreview";
import CustomTab from "../CustomTab";

const WalletModal = () => {
  const t = useTranslations("wallet");
  const { ui, setUi } = useUiStore();

  const handleClose = () => {
    setUi({
      isWalletModalOpen: false,
      walletTabType: "deposit",
      depositType: "bank",
      depositView: "card",
      isWalletOfferView: false,
    });
  };

  return (
    <Modal
      show={ui.isWalletModalOpen}
      className="wallet-modal"
      onHide={handleClose}
    >
      <button className="modal-close" onClick={handleClose}>
        <CloseIcon />
      </button>

      <Modal.Body className="p-0">
        {ui.walletTabKey === "tab" && (
          <CustomTab defaultActive={ui.walletTabType}>
            <CustomTab.Item name={t("depositTab")} tabKey={"deposit"}>
              <DepositTab />
            </CustomTab.Item>
            <CustomTab.Item name={t("withdrawTab")} tabKey={"withdraw"}>
              <WithdrawTab />
            </CustomTab.Item>
          </CustomTab>
        )}

        {ui.walletTabKey === "depositProgress" && <DepositProgress />}
        {ui.walletTabKey === "transactionDetails" && <TransactionDetails />}
        {ui.walletTabKey === "feedback" && <Feedback />}
        {ui.walletTabKey === "depositPreview" && <DepositPreview />}
      </Modal.Body>
    </Modal>
  );
};

export default WalletModal;
