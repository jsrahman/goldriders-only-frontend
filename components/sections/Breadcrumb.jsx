import Link from "next/link";
import React from "react";
import { useTranslations } from "next-intl";

const Breadcrumb = ({ activePage, children, subLink = null }) => {
  const t = useTranslations("header");
  return (
    <section className="breadcrumb">
      <div className="breadcrumb-list">
        <Link href={"/"} className="breadcrumb-item">
          {t("casino")}
        </Link>
        <svg
          width="13"
          height="12"
          viewBox="0 0 13 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 5.98389H11.96"
            stroke="#808080"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />
          <path
            d="M7.18359 1.20312L12.0003 5.99988L7.18359 10.7966"
            stroke="#808080"
            strokeWidth="1.2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </svg>
        {subLink && typeof subLink === "object" ? (
          <>
            <Link href={subLink?.url} className="breadcrumb-item">
              {subLink?.name}
            </Link>
            <svg
              width="13"
              height="12"
              viewBox="0 0 13 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.98389H11.96"
                stroke="#808080"
                strokeWidth="1.2"
                strokeLinejoin="round"
              />
              <path
                d="M7.18359 1.20312L12.0003 5.99988L7.18359 10.7966"
                stroke="#808080"
                strokeWidth="1.2"
                strokeLinecap="square"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : null}

        <span className="breadcrumb-item disabled">{activePage}</span>
      </div>

      {children ? <div className="pagination-content">{children}</div> : null}
    </section>
  );
};

export default Breadcrumb;
