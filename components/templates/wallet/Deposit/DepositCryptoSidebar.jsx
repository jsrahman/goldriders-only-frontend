import React, { useState } from "react";
import { useTranslations } from "next-intl";
import TsImage from "@/public/images/payment/t.png";
import TronImage from "@/public/images/payment/te.png";
import QrImage from "@/public/images/thumbs/qr.png";
import Image from "next/image";
import Arrow from "@/components/svg/others/Arrow";

const DepositCryptoSidebar = () => {
  const t = useTranslations("wallet");
  const tGlobal = useTranslations();
  const dropdownList = [
    {
      id: 1,
      name: "EUR",
      icon: TronImage,
    },
    {
      id: 2,
      name: "EUR",
      icon: TsImage,
    },
  ];

  const [cryptoType, setCryptoType] = useState(dropdownList[0]);

  const [cryptoDropdown, setCryptoDropdown] = useState(false);

  const handleCryptoDropdown = () => {
    setCryptoDropdown(!cryptoDropdown);
  };

  return (
    <div className="crypto-sidebar">
      <div className="mb-20">
        <p className="crypto-sidebar-desc">
          {tGlobal("The minimal amount for a deposit")}{" "}
          <span className="text-white fw-bold">5 SDT</span>.{" "}
          {tGlobal("Deposits below minimum will not be credited")}.
        </p>
        <p className="crypto-sidebar-desc">
          {tGlobal("Your USDT-Tether deposit address")}
        </p>
      </div>

      <div className="crypto-sidebar-list">
        <p className="title">{tGlobal("Crypto currency and FIAT converter")}</p>
        <div
          className="crypto-sidebar-list-item"
          onClick={handleCryptoDropdown}
        >
          <span className="label">34,456</span>

          <div className="content">
            <Image src={cryptoType.icon} alt="" />
            <span className="text">{cryptoType.name}</span>
            <span className="icon">
              <Arrow />
            </span>
          </div>

          {cryptoDropdown && (
            <div className="crypto-dropdown">
              {dropdownList.map((item) => (
                <div
                  className="crypto-dropdown-item"
                  key={item.id}
                  onClick={() => setCryptoType(item)}
                >
                  <Image src={item.icon} alt="" />
                  <span className="text">{item.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="crypto-sidebar-list-item">
          <span className="label">34,456</span>
          <div className="content">
            <Image src={TsImage} alt="" />
            <span className="text">EUR</span>
          </div>
        </div>
      </div>

      <div className="crypto-type-wrapper mb-20">
        <label className="crypto-type" htmlFor="crypto-type-one">
          <input
            type="radio"
            defaultChecked
            id="crypto-type-one"
            name="crypto-type"
            hidden
          />
          TRC20
        </label>
        <label className="crypto-type" htmlFor="crypto-type-two">
          <input type="radio" id="crypto-type-two" name="crypto-type" hidden />
          ERC20
        </label>
        <label className="crypto-type" htmlFor="crypto-type-three">
          <input
            type="radio"
            id="crypto-type-three"
            name="crypto-type"
            hidden
          />
          BEP20
        </label>
      </div>

      <div className="crypto-sidebar-qr">
        <Image src={QrImage} alt="" />
      </div>
    </div>
  );
};

export default DepositCryptoSidebar;
