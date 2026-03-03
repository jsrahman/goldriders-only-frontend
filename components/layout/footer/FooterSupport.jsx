import React from "react";
import { useTranslations } from "next-intl";

const FooterSupport = () => {
  const t = useTranslations("footer");
  return <div>{t("support")}</div>;
};

export default FooterSupport;
