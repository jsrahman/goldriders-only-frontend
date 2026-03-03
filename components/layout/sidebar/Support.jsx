"use client";
import Arrow from "@/components/svg/others/Arrow";
import { usePreferencesStore } from "@/store/preferences.store";
import { useUiStore } from "@/store/ui.store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Support = ({
  className = "",
  supportText = "Support",
  isFooter = false,
}) => {
  const { ui, setUi } = useUiStore();
  const { preferences } = usePreferencesStore();
  const t = useTranslations();

  return (
    <div className={`${className} sidebar-body__list`}>
      <button
        type="button"
        className="sidebar-body__item support w-100"
        onClick={() => setUi({ isSupportModalOpen: true })}
      >
        <span className="icon">
          <span className="icon__inner">
            <Image
              fill
              src="/images/sidebar/support.png"
              alt={t("support.title")}
              sizes="(max-width: 768px) 100vw, 20vw"
            />
          </span>
        </span>
        <span className="text">{supportText === "Support" ? t("support.title") : supportText}</span>
      </button>

      <button
        type="button"
        className="sidebar-body__item w-100"
        onClick={() => setUi({ isLangModalOpen: true })}
      >
        <span className="icon">
          <Image
            width={ui?.isCollapsible ? 20 : 24}
            height={ui?.isCollapsible ? 20 : 24}
            src={preferences?.langInfo?.img || "/images/lang/en.png"}
            alt={preferences?.langInfo?.name}
          />
        </span>
        {isFooter ? (
          <span className="text lang-short">
            {preferences?.langInfo?.short}
          </span>
        ) : (
          <span className="text lang-text">{preferences?.langInfo?.name}</span>
        )}
        <span className="arrow ms-auto">
          <Arrow />
        </span>
      </button>
    </div>
  );
};

export default Support;
