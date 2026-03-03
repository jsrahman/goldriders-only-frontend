"use client";
import useScreenSize from "@/hooks/useScreenSize";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AccountProfile = () => {
  const { screenSize } = useScreenSize();
  const t = useTranslations();
  return (
    <div className="card account-profile ">
      <div className=" card-body">
        <h3 className="account-profile__title">{t("Your Profile")}</h3>
        <div className="account-profile__inner">
          <div className="account-profile__thumb">
            <Image
              fill
              src={"/images/thumbs/user.png"}
              unoptimized
              alt={"account"}
            />
          </div>
          <div className="account-profile__info">
            <h1 className="name">{t("Golden user")}</h1>
            <p className="id">{t("User ID")} : 12345</p>
            {screenSize > 575 ? (
              <Link href="/account-edit" className="btn btn--dark">
                {t("Edit Profile & Settings")}
              </Link>
            ) : (
              <div className="btn-list d-flex gap-2">
                <Link
                  href="/account-edit"
                  className="btn w-100 flex-fill btn--dark"
                >
                  {t("Edit Profile")}
                </Link>
                <Link
                  href="/account-edit"
                  className="btn btn--dark w-100 flex-fill"
                >
                  {t("Settings")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountProfile;
