import Arrow from "@/components/svg/others/Arrow";
import DabbleCheckIcon from "@/components/svg/others/DabbleCheckIcon";
import LocationIcon from "@/components/svg/others/LocationIcon";
import { langData } from "@/public/data/ui-data";
import Image from "next/image";
import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

const WalletLocation = () => {
  const [location, setLocation] = useState("Check Republic");
  return (
    <Dropdown>
      <Dropdown.Toggle as={"div"} className="wallet-sidebar-location">
        <span className="icon">
          <LocationIcon />
        </span>
        <span className="text">{location}</span>
        <span className="arrow-icon">
          <Arrow />
        </span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {langData.map((item) => (
          <Dropdown.Item
            as={"button"}
            onClick={() => setLocation(item.name)}
            key={item.id}
            className={`${location === item.name ? "active" : ""}`}
          >
            <span className="icon">
              <Image width={24} height={24} src={item.img} alt={item.name} />
            </span>
            <span className="text">{item.name}</span>
            {location === item.name && (
              <span className="check">
                <DabbleCheckIcon />
              </span>
            )}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default WalletLocation;
