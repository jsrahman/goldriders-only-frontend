"use client";
import { useUiStore } from "@/store/ui.store";
import React from "react";
import { Modal } from "react-bootstrap";
import CloseIcon from "../svg/others/CloseIcon";
import Image from "next/image";
import DabbleCheckIcon from "../svg/others/DabbleCheckIcon";
import { usePreferencesStore } from "@/store/preferences.store";
import { langData } from "@/public/data/ui-data";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const LanguageModal = () => {
  const { ui, setUi } = useUiStore();
  const { preferences, setPreferences } = usePreferencesStore();
  const router = useRouter();
  const t = useTranslations("language");

  const changeLang = async (lang) => {
    await fetch("/api/locale", {
      method: "POST",
      body: JSON.stringify({ lang }),
    });
    router.refresh(); // re-render with new language
  };

  const handleClose = () => {
    setUi({ isLangModalOpen: false });
  };

  const handleSelect = (item) => {
    setPreferences({ langInfo: item });
    setUi({ isLangModalOpen: false });
    changeLang(item.code);
  };

  return (
    <Modal
      show={ui.isLangModalOpen}
      className="language-modal mt-5"
      onHide={handleClose}
    >
      <Modal.Header className="flex-between p-0">
        <Modal.Title>{t("selectLanguage")}</Modal.Title>
        <button className="modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>
      </Modal.Header>
      <Modal.Body className="p-0 mt-30">
        <ul className="list-group">
          {langData.map((item) => (
            <li
              className={`list-group-item ${preferences?.langInfo?.short === item.short ? "active" : ""
                }`}
              key={item.id}
              role="button"
              onClick={() => handleSelect(item)}
            >
              <span className="icon">
                <Image width={24} height={24} src={item.img} alt={item.name} />
              </span>
              <span className="text">{item.name}</span>
              <span className="check">
                {preferences?.langInfo?.short === item.short && (
                  <DabbleCheckIcon />
                )}
              </span>
            </li>
          ))}
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default LanguageModal;
