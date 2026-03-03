"use client";
import Image from "next/image";
import React from "react";
import { usePreferencesStore } from "@/store/preferences.store";
import { useTranslations } from "next-intl";

const CookiesCard = () => {
  const { preferences, setPreferences } = usePreferencesStore();
  const t = useTranslations();

  if (preferences.isAcceptCookie) return null;

  function handleCookies() {
    setPreferences({ isAcceptCookie: true });
  }

  return (
    <section className="cookies-card">
      <span className="cookies-card__thumb">
        <Image
          src="/images/thumbs/cookies-thumbs.png"
          alt={t("cookies.alt")}
          width={54}
          height={54}
          priority
          className="cookies-card__thumb-img"
        />
      </span>
      <h3 className="cookies-card__content">{t("cookies.message")}</h3>
      <button
        onClick={handleCookies}
        className="cookies-card__btn btn btn--dark"
      >
        {t("cookies.accept")}
      </button>
    </section>
  );
};

export default CookiesCard;
