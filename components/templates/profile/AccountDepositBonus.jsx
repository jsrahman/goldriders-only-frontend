import Image from "next/image";
import React from "react";
import { useTranslations } from "next-intl";
import WageredSlide from "../WageredSlide";
import InfoIcon from "@/components/svg/others/InfoIcon";

const AccountDepositBonus = () => {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  return (
    <div className="deposit-bonus">
      <div className="deposit-bonus__heder">
        <div className="info">
          <div className="badge">
            <span className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <mask
                  id="mask0_13866_14500"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="10"
                  height="10"
                >
                  <rect width="10" height="10" fill="#D9D9D9" />
                </mask>
                <g mask="url(#mask0_13866_14500)">
                  <path
                    d="M1.66732 9.16699V4.58366H0.833984V2.08366H3.00065C2.96593 2.02116 2.94336 1.95519 2.93294 1.88574C2.92253 1.8163 2.91732 1.74338 2.91732 1.66699C2.91732 1.31977 3.03885 1.02463 3.2819 0.781576C3.52496 0.53852 3.8201 0.416992 4.16732 0.416992C4.32704 0.416992 4.47635 0.446506 4.61523 0.505534C4.75412 0.564562 4.8826 0.646159 5.00065 0.750326C5.11871 0.639214 5.24718 0.555881 5.38607 0.500326C5.52496 0.44477 5.67426 0.416992 5.83398 0.416992C6.18121 0.416992 6.47635 0.53852 6.7194 0.781576C6.96246 1.02463 7.08398 1.31977 7.08398 1.66699C7.08398 1.74338 7.07704 1.81456 7.06315 1.88053C7.04926 1.94651 7.02843 2.01421 7.00065 2.08366H9.16732V4.58366H8.33398V9.16699H1.66732ZM5.83398 1.25033C5.71593 1.25033 5.61697 1.29026 5.53711 1.37012C5.45725 1.44998 5.41732 1.54894 5.41732 1.66699C5.41732 1.78505 5.45725 1.88401 5.53711 1.96387C5.61697 2.04373 5.71593 2.08366 5.83398 2.08366C5.95204 2.08366 6.051 2.04373 6.13086 1.96387C6.21072 1.88401 6.25065 1.78505 6.25065 1.66699C6.25065 1.54894 6.21072 1.44998 6.13086 1.37012C6.051 1.29026 5.95204 1.25033 5.83398 1.25033ZM3.75065 1.66699C3.75065 1.78505 3.79058 1.88401 3.87044 1.96387C3.9503 2.04373 4.04926 2.08366 4.16732 2.08366C4.28537 2.08366 4.38433 2.04373 4.46419 1.96387C4.54405 1.88401 4.58398 1.78505 4.58398 1.66699C4.58398 1.54894 4.54405 1.44998 4.46419 1.37012C4.38433 1.29026 4.28537 1.25033 4.16732 1.25033C4.04926 1.25033 3.9503 1.29026 3.87044 1.37012C3.79058 1.44998 3.75065 1.54894 3.75065 1.66699ZM1.66732 2.91699V3.75033H4.58398V2.91699H1.66732ZM4.58398 8.33366V4.58366H2.50065V8.33366H4.58398ZM5.41732 8.33366H7.50065V4.58366H5.41732V8.33366ZM8.33398 3.75033V2.91699H5.41732V3.75033H8.33398Z"
                    fill="white"
                  />
                </g>
              </svg>
            </span>
            <span className="text">{t("bonus").toUpperCase()}</span>
          </div>
          <h2 className="title">{tGlobal("bonus.firstDepositFull")}</h2>
        </div>
        <div className="thumb">
          <Image fill alt="card-thumb" src={"/images/thumbs/bonus-card1.png"} />
        </div>
      </div>
      <div className="deposit-bonus__slider">
        <WageredSlide percent={80} start={1460} end={3000} />
      </div>
      <div className="deposit-bonus__footer">
        <span className="text">Wagered 67%</span>
        <span role="button" className="icon">
          <InfoIcon />
        </span>
      </div>
    </div>
  );
};

export default AccountDepositBonus;
