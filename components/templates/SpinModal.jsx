"use client";
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { useUiStore } from "@/store/ui.store";
import Image from "next/image";
import CloseIcon from "../svg/others/CloseIcon";
import { useTranslations } from "next-intl";

const wheelData = [100, 60, 12, 5, 7, 4, 16, 2, 50, 22, 4, 8, 12, 4, 44, 32];
const spinDuration = 8000;

const SpinModal = () => {
  const { ui, setUi } = useUiStore();
  const [showResult, setShowResult] = useState(false);
  const t = useTranslations("spin");

  const handleClose = () => {
    let randomIndex = () => Math.floor(Math.random() * 16);
    setUi({ isSpinModalOpen: false });

    setTimeout(() => {
      setUi({ nextSpinIndex: randomIndex() });
      setShowResult(false);
    }, 500);
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setShowResult(true);

      // After completing rotation it see 3sec extra
    }, spinDuration + 3000);
    return () => {
      clearTimeout(time);
      setShowResult(false);
    };
  }, [ui.nextSpinIndex]);

  return (
    <Modal
      show={ui.isSpinModalOpen}
      className="spin-modal mt-5"
      onHide={handleClose}
    >
      <Modal.Body>
        {!showResult ? (
          <div className="">
            <div className="modal-thumb">
              <Image
                priority
                fill
                src="/images/thumbs/spin-modal-bg.png"
                alt={t("alt.thumb")}
              />
            </div>
            <button className="modal-close" onClick={handleClose}>
              <CloseIcon />
            </button>

            <div className="spin-content">
              <h2 className="title">{t("title")}</h2>
              <p className="number">$100</p>
            </div>
            <div
              className="spin-container"
              style={{
                "--rotation-stop-index": ui.nextSpinIndex,
                "--rotation-duration": `${spinDuration}ms`,
              }}
            >
              <div className="spin-content">
                <span className="spin-ball">
                  <div className="spin-ball__bg">
                    <Image
                      fill
                      priority
                      src="/images/thumbs/spin-select.png"
                      alt={t("alt.ball")}
                    />
                  </div>
                </span>

                <div className="spin__numbers">
                  <div className="spin-bg">
                    <Image
                      fill
                      src="/images/thumbs/spin-bg.png"
                      alt={t("alt.bg")}
                    />
                  </div>
                  {wheelData.map((item, index) => (
                    <span
                      key={index}
                      className="number"
                      style={{ transform: `rotate(${index * (360 / 16)}deg)` }}
                    >
                      <span className="text"> {item}</span>
                    </span>
                  ))}
                </div>
              </div>
              <div className="spin-footer">
                <div className="spin-footer__thumb">
                  <Image
                    fill
                    src="/images/thumbs/spin-footer.png"
                    alt={t("alt.thumb")}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="spin-winner">
            <h2 className="title">{t("congrats")}</h2>
            <h3 className="amount">${wheelData[ui.nextSpinIndex]}</h3>
            <button className="btn btn--base w-100" onClick={handleClose}>
              {t("collect")}
            </button>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SpinModal;
