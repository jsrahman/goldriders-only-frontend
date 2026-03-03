"use client";
import React from "react";
import useScreenSize from "@/hooks/useScreenSize";
import Image from "next/image";

const CTABg = () => {
  const { screenSize } = useScreenSize();
  if (screenSize < 576) {
    return (
      <div className="cta-bg">
        <Image src={"/images/thumbs/cta-bg-mobile.png"} fill alt={"cta-bg"} />
      </div>
    );
  }
  return (
    <>
      <div className="cta-bg">
        <Image src={"/images/thumbs/cta-bg.png"} fill alt={"cta-bg"} />
      </div>
    </>
  );
};

export default CTABg;
