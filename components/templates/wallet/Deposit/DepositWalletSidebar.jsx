import React from "react";
import PaymentItem from "./PaymentItem";
import visaThumb from "@/public/images/bank/visa.png";
import OtherThumb from "@/public/images/bank/other.png";
import googleThumb from "@/public/images/bank/googlepay.png";
import spayThumb from "@/public/images/bank/spay.png";
import applePayThumb from "@/public/images/bank/applepay.png";
import WalletLocation from "../WalletLocation";
import { useUiStore } from "@/store/ui.store";

const paymentImages = [
  {
    name: "others",
    thumb: OtherThumb,
  },
  {
    name: "card",
    thumb: visaThumb,
  },
  {
    name: "mobilePay",
    thumb: googleThumb,
  },
  {
    name: "spay",
    thumb: spayThumb,
  },
  {
    name: "applePay",
    thumb: applePayThumb,
  },
];

const DepositWalletSidebar = () => {
  const { ui, setUi } = useUiStore();
  return (
    <>
      <WalletLocation />

      <div className="select-pay-wrapper">
        {paymentImages.map((src, index) => (
          <PaymentItem
            key={index}
            src={src}
            setDepositView={() => setUi({ depositView: src.name })}
            depositView={ui.depositView}
          />
        ))}
      </div>
    </>
  );
};

export default DepositWalletSidebar;
