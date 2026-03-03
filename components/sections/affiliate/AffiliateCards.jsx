import React from "react";
import InviteFriend from "./InviteFriend";
import AffiliateBonus from "./AffiliateBonus";
import AffiliateMyRewards from "./AffiliateMyRewards";
import AffiliateCodeReferral from "./AffiliateCodeReferral";
import AffiliateBanner from "./AffiliateBanner";

const AffiliateCards = () => {
  return (
    <div className="affiliate-cards">
      <div className="affiliate-cards__invites">
        <InviteFriend />
        <AffiliateBonus />
      </div>
      <AffiliateMyRewards />
      <div className="affiliate-cards__pack">
        <AffiliateCodeReferral />
        <AffiliateBanner />
      </div>
    </div>
  );
};

export default AffiliateCards;
