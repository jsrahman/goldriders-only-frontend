import Image from "next/image";
import Link from "next/link";
import React from "react";

const BannerList = ({ data }) => {
  return (
    <section className="banner-list">
      {data.map((item) => (
        <Link href={item.link} key={item.id} className="banner-list__item">
          <div className="icon relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              unoptimized
              className="object-contain"
            />
          </div>
          <h5 className="text">{item.title}</h5>
        </Link>
      ))}
    </section>
  );
};

export default BannerList;
