"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import { promoListData } from "@/public/data/promotions-data";
import { useUiStore } from "@/store/ui.store";
import React from "react";
import { Modal } from "react-bootstrap";

import { useTranslations } from "next-intl";

const PromotionModal = () => {
  const { ui, setUi } = useUiStore();
  const t = useTranslations();
  const handleClose = () => {
    setUi({ isPromotionModalOpen: false });
  };
  return (
    <Modal
      show={ui.isPromotionModalOpen}
      className="promo-modal mt-5"
      onHide={handleClose}
    >
      <Modal.Header className="flex-between p-0">
        <Modal.Title>{t("promo.modal.header")}</Modal.Title>
        <button className="modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>
      </Modal.Header>
      <Modal.Body className="p-0">
        <p className="promo-modal__text">{t("promo.modal.text")}</p>
        <ul className="list-group">
          {promoListData.map((item, id) => (
            <li className="list-group-item" key={id}>
              <span className="text">{item.title}</span>
              <span className="value">{item.value}</span>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default PromotionModal;
