import Image from "next/image";
import typeOneThumb from "@/public/images/register/one.png";
import { useUiStore } from "@/store/ui.store";
import { useTranslations } from "next-intl";

const RegisterWarning = ({ setIsClose }) => {
  const { setUi } = useUiStore();
  const t = useTranslations();
  function handleClose() {
    setUi({ isAuthModalOpen: false });
    setTimeout(() => {
      setIsClose(false);
    }, 200);
  }
  return (
    <>
      <div className="account register-success">
        <div className="account-content">
          <div className="account-wrapper">
            <div className="account-heading text-center">
              <h2 className="account-title mb-2">{t("auth.areYouSure")}</h2>
              <p className="account-subtitle">{t("auth.progressLost")}</p>
            </div>
            <label htmlFor="typeOne" className="bonus-type">
              <span className="bonus-type-thumb">
                <Image src={typeOneThumb} unoptimized alt={"account"} />
              </span>
              <span className="bonus-type-content">
                <span className="bonus-type-title">{t("bonus.casinoFirst")}</span>
                <span className="bonus-type-text">
                  <span className="text--base d-inline">{t("cta.percentage")}</span> {t("bonus.upTo")}{" "}
                  <span className="text--base d-inline">{t("auth.warningBonusAmount")}</span>{" "}
                  {t("promotions.freeSpins")}
                </span>
              </span>
              <input
                type="radio"
                defaultChecked
                hidden
                name="registerType"
                id="typeOne"
              />
            </label>
            <button
              className="btn btn--accent w-100"
              onClick={() => setIsClose(false)}
            >
              {t("auth.keepRegistering")}
            </button>

            <button className="return-btn" onClick={handleClose}>
              {t("auth.returnToSite")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterWarning;
