import providerListData from "@/public/data/provider-list";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DefaultProvider = () => {
  return (
    <div className="default-provider">
      <div className="default-provider__content">
        {providerListData.map((item) => (
          <Link href={"/"} className="default-provider__link" key={item.id}>
            <span className="thumb">
              <Image src={item.img} alt="" width={85} height={42} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DefaultProvider;
