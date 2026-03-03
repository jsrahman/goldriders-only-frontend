import CopyIcon from "@/components/svg/others/CopyIcon";
import SocialShare from "@/components/templates/SocialShare";
import React from "react";
import { useTranslations } from "next-intl";

const InviteFriend = () => {
  const t = useTranslations("affiliate");
  return (
    <div className="card invite-friend">
      <div className="card-body">
        <div className="invite-friend__top">
          <div className="commission-list">
            <h1 className="commission-list__title">{t("invite_title")}</h1>

            <div className="commission-list__inner">
              <div className="commission-list__item">
                <span className="title">
                  {t("invite_referralRewards")}
                </span>
                <span className="number">$0.00</span>
              </div>
              <div className="commission-list__item">
                <span className="title">
                  {t("invite_commissionRewards")}
                </span>
                <span className="number">25%</span>
              </div>
            </div>
          </div>

          <div className="terms-card">
            <h2 className="terms-card__title">
              {t("invite_termsTitle")}
            </h2>
            <h3 className="terms-card__subtitle">
              <span className="text--accent">{t("invite_termsSubtitle_part1")}</span> {t("invite_termsSubtitle_part2")}
            </h3>
            <p className="terms-card__desc">
              {t("invite_termsDesc")}
            </p>
          </div>
        </div>
        <div className="invite-friend__refer">
          <div className="refer-item">
            <h4 className="title">{t("invite_referralCode")}</h4>
            <div className="copy-wrapper">
              <span className="input">ZDZQFDIU</span>
              <span className="copy btn btn--base icon-button">
                <CopyIcon />
              </span>
            </div>
          </div>
          <div className="refer-item">
            <h4 className="title">{t("invite_referralCode")}</h4>
            <div className="copy-wrapper">
              <span className="input">https//goldriders.com/?ref=JGJU1R8Z</span>
              <span className="copy btn btn--base icon-button">
                <CopyIcon />
              </span>
            </div>
          </div>
        </div>
        <div className="invite-friend__social">
          <SocialShare />
        </div>
      </div>
    </div>
  );
};

export default InviteFriend;
