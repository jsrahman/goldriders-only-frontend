import React from "react";
import Image from "next/image";
import NoDataImg from "@/public/images/thumbs/no-data.png";
import { useTranslations } from "next-intl";
const NoData = ({ text = "No Data Text" }) => {
  const t = useTranslations();
  return (
    <div className="no-data">
      <Image src={NoDataImg} alt={t("common.noData")} />
      <span className="text">{text}</span>
    </div>
  );
};

export default NoData;
