import MoneyIcon from "@/components/svg/others/MoneyIcon";
import React from "react";

const ProfileWithdraw = () => {
  return (
    <div className="card  account-withdraw">
      <div className="card-body">
        <button className="btn w-100  d-flex gap-1 btn--base flex-center">
          <MoneyIcon /> GO TO AFFILIATE DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default ProfileWithdraw;
