import GoogleIcon from "@/components/svg/others/GoogleIcon";
import Link from "next/link";
import React from "react";

const SocialLogin = () => {
  return (
    <div className="account-social-list">
      <Link href="3" className="account-social-item">
        <span className="icon">
          <GoogleIcon />
        </span>
        Google
      </Link>
    </div>
  );
};

export default SocialLogin;
