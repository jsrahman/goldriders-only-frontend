import ElderSign from "@/components/svg/others/ElderSign";
import Image from "next/image";
import React from "react";

import pay0 from "@/public/images/payment/0.png";
import pay1 from "@/public/images/payment/1.png";
import pay2 from "@/public/images/payment/2.png";
import pay3 from "@/public/images/payment/3.png";
import pay4 from "@/public/images/payment/4.png";
import pay5 from "@/public/images/payment/5.png";
import pay6 from "@/public/images/payment/6.png";
import pay7 from "@/public/images/payment/7.png";
const paymentImages = [pay0, pay1, pay2, pay3, pay4, pay5, pay6, pay7];

import { useTranslations } from "next-intl";

const FooterBottom = () => {
  const t = useTranslations("footer");
  return (
    <section className="footer-bottom">
      <p className="footer-bottom__left">{t("acceptedCurrencies")}</p>
      <ul className="footer-bottom__bank">
        {paymentImages.map((src, index) => (
          <li key={index}>
            <Image src={src} unoptimized alt={"bank"} />
          </li>
        ))}
      </ul>
      <div className="footer-bottom__right">
        <ElderSign />
        <p className="text">{t("18plus")}</p>
        <div className="footer-bottom__right-img">
          <Image
            src={"/images/thumbs/check-icon.png"}
            fill
            alt={"bank"}
            sizes="50px"
          />
        </div>
      </div>
    </section>
  );
};

export default FooterBottom;
