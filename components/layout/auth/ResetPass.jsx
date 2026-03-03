import Image from "next/image";
import authThumb from "@/public/images/thumbs/reset.png";
import authThumbSm from "@/public/images/thumbs/account-sm.png";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";

const ResetPass = () => {
  const { screenSize } = useScreenSize();
  const t = useTranslations("auth");
  return (
    <div className="account">
      <div className="account-thumb">
        {screenSize > 575 ? (
          <Image src={authThumb} unoptimized alt={"account"} />
        ) : (
          <Image src={authThumbSm} unoptimized alt={"account"} />
        )}
      </div>
      <div className="account-content">
        <div className="account-wrapper">
          <h2 className="account-title">{t("resetPassword")}</h2>
          <div className="account-form">
            <div className="form-group">
              <label htmlFor="firstName" className="form--label">
                {t("email")}
              </label>
              <input
                type="email"
                className="form--control"
                placeholder=""
                id="firstName"
              />
            </div>
            <div className="form-group">
              <button className="btn btn--base w-100">{t("send")}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPass;
