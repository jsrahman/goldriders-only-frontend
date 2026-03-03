import React from "react";
import authThumb from "@/public/images/thumbs/account.png";
import authThumbSm from "@/public/images/thumbs/account-sm.png";
import Image from "next/image";
import useScreenSize from "@/hooks/useScreenSize";

const AuthWrapper = ({ children }) => {
  const { screenSize } = useScreenSize();
  return (
    <>
      <div className="account">
        <div className="account-thumb">
          {screenSize > 575 ? (
            <Image src={authThumb} unoptimized alt={"account"} />
          ) : (
            <Image src={authThumbSm} unoptimized alt={"account"} />
          )}
        </div>
        <div className="account-content">{children}</div>
      </div>
    </>
  );
};

export default AuthWrapper;
