"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import React from "react";
import { useUiStore } from "@/store/ui.store";
import { Modal } from "react-bootstrap";
import Balance from "./Balance";

const BalanceModal = () => {
  const { ui, setUi } = useUiStore();

  const handleClose = () => {
    setUi({ isBalanceModalOpen: false });
  };
  return (
    <Modal
      show={ui.isBalanceModalOpen}
      className="wallet-modal"
      onHide={handleClose}
    >
      <button className="modal-close" onClick={handleClose}>
        <CloseIcon />
      </button>

      <Modal.Body className="p-0">
        <Balance />
      </Modal.Body>
    </Modal>
  );
};

export default BalanceModal;
