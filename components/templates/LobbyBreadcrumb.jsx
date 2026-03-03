import React from "react";
import SearchInput from "../layout/search/SearchInput";
import SearchButton from "../layout/search/SearchButton";
import DropDown from "./DropDown";
import slotData from "@/public/data/slot-data";
import BannerList from "../sections/banner/BannerList";
import { bannerList, slotList } from "@/public/data/bannerList";
import { useTranslations } from "next-intl";

const LobbyBreadcrumb = () => {
  const t = useTranslations("lobby");
  return (
    <div className="breadcrumb-full">
      <div className="breadcrumb-full__heder">
        <div className="flex-fill breadcrumb-full__search">
          <SearchButton text={t("search")} />
        </div>
        <DropDown data={slotData} />
        <div className="w-100">
          <BannerList data={slotList} />
        </div>
      </div>
    </div>
  );
};

export default LobbyBreadcrumb;
