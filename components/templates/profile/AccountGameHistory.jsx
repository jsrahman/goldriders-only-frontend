"use client";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import CalenderStartIcon from "@/components/svg/others/CalenderStartIcon";
import CalenderEndIcon from "@/components/svg/others/CalenderEndIcon";
import ArrowDownIcon from "@/components/svg/others/ArrowDownIcon";
import ResponsiveTable from "../ResponsiveTable";
import ProfileDateDropdown from "./ProfileDateDropdown";
import { availableTabTable } from "@/public/data/promotions-data";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import { useTranslations } from "next-intl";

const AccountGameHistory = ({ title }) => {
  const t = useTranslations("history");
  const availableTableHead = availableTabTable.header;
  const availableTableData = availableTabTable.data;
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="game-history">
      <h2 className="game-history__title">{title}</h2>
      <div className="game-history__body">
        <div className="table-filter">
          <div className="date-filter">
            <div className="date-filter_item">
              <span className="icon">
                <CalenderStartIcon />
              </span>
              <div className="info">
                <span className="title">{t("start")}</span>
                <DatePicker
                  format="yyyy.MM.dd"
                  onChange={setStartDate}
                  value={startDate}
                />
              </div>
              <span className="icon ms-auto">
                <ArrowDownIcon />
              </span>
            </div>

            <div className="date-filter_item">
              <span className="icon">
                <CalenderEndIcon />
              </span>
              <div className="info">
                <span className="title">{t("end")}</span>
                <DatePicker
                  format="yyyy.MM.dd"
                  onChange={setEndDate}
                  value={endDate}
                />
              </div>

              <span className="icon ms-auto">
                <ArrowDownIcon />
              </span>
            </div>
          </div>
          <ProfileDateDropdown />
        </div>
        <div className="table-responsive">
          <ResponsiveTable header={availableTableHead} data={null} />
        </div>
      </div>
    </div>
  );
};

export default AccountGameHistory;
