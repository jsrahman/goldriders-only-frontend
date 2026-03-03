import { useUiStore } from "@/store/ui.store";
import DepositCryptoSidebar from "./DepositCryptoSidebar";
import DepositWalletSidebar from "./DepositWalletSidebar";

const DepositSelection = () => {
  const { ui, setUi } = useUiStore();
  function handleDepositType() {
    setUi({ depositType: "bank", depositView: "card" });
  }
  function handleCryptoView() {
    setUi({ depositType: "crypto", depositView: "crypto" });
  }

  return (
    <>
      <div className="wallet-wrapper-sidebar">
        <div className="wallet-sidebar-tab">
          <button
            className={
              ui.depositType === "bank"
                ? "btn btn--accent btn--sm fw-bold"
                : "btn text-white btn--sm"
            }
            onClick={handleDepositType}
          >
            BANKING
          </button>
          <button
            className={
              ui.depositType === "crypto"
                ? "btn btn--accent btn--sm fw-bold"
                : "btn text-white btn--sm"
            }
            onClick={handleCryptoView}
          >
            CRYPTO
          </button>
        </div>

        {ui.depositType == "bank" ? (
          <DepositWalletSidebar />
        ) : (
          <DepositCryptoSidebar />
        )}
      </div>
    </>
  );
};

export default DepositSelection;
