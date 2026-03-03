import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import Link from "next/link";
import Image from "next/image";
import DepositIcon from "../../svg/sidebar/DepositIcon";
import { useTranslations } from "next-intl";

import pay0 from "@/public/images/payment/mobile-sidebar/0.png";
import pay1 from "@/public/images/payment/mobile-sidebar/1.png";
import pay2 from "@/public/images/payment/mobile-sidebar/2.png";
import pay3 from "@/public/images/payment/mobile-sidebar/3.png";
import pay4 from "@/public/images/payment/mobile-sidebar/4.png";
import pay5 from "@/public/images/payment/mobile-sidebar/5.png";
import pay6 from "@/public/images/payment/mobile-sidebar/6.png";
import pay7 from "@/public/images/payment/mobile-sidebar/7.png";
import pay8 from "@/public/images/payment/mobile-sidebar/8.png";
import pay9 from "@/public/images/payment/mobile-sidebar/9.png";
import pay10 from "@/public/images/payment/mobile-sidebar/10.png";
import pay11 from "@/public/images/payment/mobile-sidebar/11.png";

const paymentImages = [
  pay0,
  pay1,
  pay2,
  pay3,
  pay4,
  pay5,
  pay6,
  pay7,
  pay8,
  pay9,
  pay10,
  pay11,
];

const SidebarFooter = () => {
  const { isDesktop } = useScreenSize();
  const t = useTranslations("wallet");
  if (isDesktop) return null;

  return (
    <div className="sidebar-body__list sidebar-footer">
      <Link href={"/deposit"} className="sidebar-body__item">
        <span className="icon">
          <DepositIcon />
        </span>
        <span className="text">{t("deposit")}</span>
      </Link>
      <ul className="sidebar-footer__bank">
        {paymentImages.map((src, index) => (
          <li key={index}>
            <Image src={src} unoptimized alt={"bank"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarFooter;
