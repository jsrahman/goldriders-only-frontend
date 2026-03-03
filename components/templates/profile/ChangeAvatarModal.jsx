"use client";
import CloseIcon from "@/components/svg/others/CloseIcon";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";
import { Modal } from "react-bootstrap";
const imgList = [
  {
    id: 0,
    img: "/images/avatar/avater0.png",
  },
  {
    id: 1,
    img: "/images/avatar/avater1.png",
  },
  {
    id: 2,
    img: "/images/avatar/avater2.png",
  },
  {
    id: 3,
    img: "/images/avatar/avater3.png",
  },
  {
    id: 4,
    img: "/images/avatar/avater4.png",
  },
  {
    id: 5,
    img: "/images/avatar/avater5.png",
  },
];

const ChangeAvatarModal = ({ show, handleClose, avatar, setAvatar }) => {
  const t = useTranslations("profile");
  return (
    <Modal show={show} className="avatar-modal mt-5" onHide={handleClose}>
      <Modal.Header className="flex-between p-0">
        <Modal.Title className="text-uppercase">{t("selectNewAvatar")}</Modal.Title>
        <button className="modal-close" onClick={handleClose}>
          <CloseIcon />
        </button>
      </Modal.Header>
      <Modal.Body className="p-0">
        <div className="avatar-list">
          {imgList.map((item) => (
            <span
              onClick={() => setAvatar(item)}
              role="button"
              className={`avatar-list__item ${
                item.id === avatar.id ? "active" : ""
              }`}
              key={item.id}
            >
              <Image
                src={item.img}
                alt={"avatar"}
                priority
                width={160}
                height={160}
              />
            </span>
          ))}
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ChangeAvatarModal;
