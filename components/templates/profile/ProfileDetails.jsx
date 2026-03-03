import ProfileWallet from "./ProfileWallet";
import React from "react";
import AccountDepositBonus from "./AccountDepositBonus";
import AccountProfile from "./AccountProfile";
import ProfileAffiliateCard from "./ProfileAffiliateCard";
import ProfileInfoCard from "./ProfileInfoCard";
import ProfileWithdraw from "./ProfileWithdraw";
import AccountReferral from "./AccountReferral";

const ProfileDetails = () => {
  return (
    <section className="profile-section">
      <div className="row gy-2">
        <div className="col-md-6">
          <ProfileWallet />
          <AccountDepositBonus />
          <AccountProfile />
        </div>
        <div className="col-md-6">
          <ProfileAffiliateCard />
          <ProfileInfoCard />
          <ProfileWithdraw />
          <AccountReferral />
        </div>
      </div>
    </section>
  );
};

export default ProfileDetails;
