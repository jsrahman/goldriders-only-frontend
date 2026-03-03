import DabbleCheckIcon from "@/components/svg/others/DabbleCheckIcon";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const listItem = ["All Time", "Last 7 Days", "Last 15 Days", "Last 30 Days"];

const ProfileDateDropdown = () => {
  const [selectItem, setSelectItem] = useState(0);
  const t = useTranslations();
  return (
    <Dropdown className="table-dropdown">
      <Dropdown.Toggle as={"div"} className="table-dropdown__header">
        <div className="table-dropdown__text">
          <span className="text">{t("Period")}</span>
          <span className="time">{listItem[selectItem]}</span>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {listItem.map((item, index) => (
          <Dropdown.Item
            as={"button"}
            key={index}
            className={selectItem === index ? "active" : ""}
            onClick={() => setSelectItem(index)}
          >
            <span className="text">{item}</span>
            {selectItem === index && (
              <span className={"check-icon"}>
                <DabbleCheckIcon />
              </span>
            )}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ProfileDateDropdown;
