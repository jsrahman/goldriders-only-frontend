"use client";
import Image from "next/image";
import React from "react";
import pay0 from "@/public/images/thumbs/pay-item-0.png";
import pay1 from "@/public/images/thumbs/pay-item-1.png";
import pay2 from "@/public/images/thumbs/pay-item-2.png";
import CTABg from "./CTABg";
import { usePreferencesStore } from "@/store/preferences.store";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";
const paymentImages = [pay0, pay1, pay2];

const CTA = () => {
  const { preferences } = usePreferencesStore();
  const { setUi } = useUiStore();
  const t = useTranslations();
  return (
    <section className="cta-section">
      <CTABg />
      <div className="section-content">
        <h2 className="cta-title">
          <span className="base-text">{t("cta.fastAndEasy")}</span> {t("cta.wayToGetStarted")}
        </h2>
        <div className="cta-info">
          <span className="percentage"> {t("cta.percentage")}</span>
          <span className="text" dangerouslySetInnerHTML={{ __html: t.raw("cta.firstWelcomeOffer") }}></span>
        </div>
        <div className="cta-footers">
          {preferences.isAuth ? (
            <button
              className="btn btn--accent"
              onClick={() => setUi({ isWalletModalOpen: true })}
            >
              {t("common.depositNow")}
            </button>
          ) : (
            <button
              className="btn btn--accent"
              onClick={() =>
                setUi({ isAuthModalOpen: true, authType: "register" })
              }
            >
              {t("banner.registerNow")}
            </button>
          )}
          <ul className="pay-list">
            {paymentImages.map((image, index) => (
              <li key={index} className="pay-item">
                <Image src={image} alt={"cta-pay"} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CTA;
