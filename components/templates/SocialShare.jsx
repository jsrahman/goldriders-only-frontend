import Link from "next/link";
import React from "react";
import X from "../svg/social/X";
import Facebook from "../svg/social/Facebook";
import TelegramIcon from "../svg/social/TelegramIcon";
import Whtatsapp from "../svg/social/Whtatsapp";

const SocialShare = () => {
  return (
    <div className="social-share">
      <div className="social-share__icons">
        <Link href={"#"}>
          <X />
        </Link>
        <Link href={"#"}>
          <Facebook />
        </Link>
        <Link href={"#"}>
          <TelegramIcon />
        </Link>
        <Link href={"#"}>
          <Whtatsapp />
        </Link>
      </div>
    </div>
  );
};

export default SocialShare;
