import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterMenu from "./FooterMenu";
import FooterBottom from "./FooterBottom";
import FooterAction from "./FooterAction";
import SupportModal from "../sidebar/Support";

import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("footer");
  return (
    <footer>
      <section className="footer-top">
        <div className="footer-content">
          <Link href={"#"} className="footer-content__logo">
            <Image
              src={"/images/logo/logo.png"}
              alt={"logo"}
              width={176.465}
              height={39.458}
            />
          </Link>

          <SupportModal
            supportText={t("liveSupport")}
            className="d-sm-none"
            isFooter={true}
          />
          <h4 className="footer-content__text">{t("joinCommunity")}</h4>
          <FooterAction className="d-none d-sm-flex" />
        </div>
        <FooterMenu />

        <FooterAction className="d-sm-none d-flex" />
      </section>

      <FooterBottom />
      <section className="footer-copy text-center text-sm-start">
        <p className="copy-text">
          {t("copyright")}
        </p>
        <p className="footer-warning mt-3 d-sm-none">
          {t("gamblingWarning")}
        </p>
      </section>
    </footer>
  );
};

export default Footer;
