"use client";
import { useUiStore } from "@/store/ui.store";
import React from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../svg/others/CloseIcon";
import Image from "next/image";
import DabbleCheckIcon from "../svg/others/DabbleCheckIcon";
import { langData } from "@/public/data/ui-data";
import { useTranslations } from "next-intl";

const SupportModal = () => {
  const { ui, setUi } = useUiStore();
  const t = useTranslations("support");

  const handleClose = () => {
    setUi({ isSupportModalOpen: false });
  };

  const handleSelect = (item) => {
    setUi({ isSupportModalOpen: false });
  };

  return (
    <Modal
      show={ui.isSupportModalOpen}
      className="support-modal mt-5 p-0"
      onHide={handleClose}
    >
      <button className="modal-close" onClick={handleClose}>
        <CloseIcon />
      </button>
      <Modal.Body className="p-0">
        <div className="support-thumb">
          <Image fill src="/images/thumbs/support-modal.png" alt="" />
        </div>
        <div className="support-content">
          <div className="support-content__title">{t("hello")}</div>
          <p className="support-content__desc">{t("languagesDesc")}</p>
        </div>
        <ul className="list-group">
          {langData.map((item, index) => (
            <li
              className={`list-group-item ${index === 0 ? "active" : ""}`}
              key={item.id}
              role="button"
              onClick={() => handleSelect(item)}
            >
              <span className="icon">
                <Image width={24} height={24} src={item.img} alt={item.name} />
              </span>
              <span className="text">{item.name}</span>
              <span className="check">
                <DabbleCheckIcon />
              </span>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default SupportModal;
