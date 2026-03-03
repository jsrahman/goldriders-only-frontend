import Image from "next/image";
import { useUiStore } from "@/store/ui.store";

const PaymentItem = ({ setDepositView, depositView, src }) => {
  const { ui } = useUiStore();
  return (
    <button
      disabled={ui.isWalletOfferView}
      onClick={() => setDepositView(src.name)}
      className={`pay-item ${depositView === src.name ? "active" : ""}`}
    >
      <span className="pay-item-img">
        <Image src={src.thumb} alt="pay-image" />
      </span>
    </button>
  );
};

export default PaymentItem;
