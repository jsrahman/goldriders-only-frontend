"use client";
import React, { useState } from "react";
import Link from "next/link";
import CameraIcon from "@/components/svg/others/CameraIcon";
import ShevronLeft from "@/components/svg/others/ShevronLeft";
import Image from "next/image";
import DropDown from "../DropDown";
import ChangeAvatarModal from "./ChangeAvatarModal";
import useScreenSize from "@/hooks/useScreenSize";
import SaveIcon from "@/components/svg/others/SaveIcon";
import VerifyIcon from "@/components/svg/others/VerifyIcon";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileEditSchema } from "@/lib/schema";
import ErrorMessage from "@/components/templates/form/ErrorMessage";

const dropdownData = [
  {
    id: 0,
    img: "/images/lang/en.png",
  },
  {
    id: 1,
    img: "/images/lang/ua.png",
  },
  {
    id: 2,
    img: "/images/lang/fr.png",
  },
];
const ThumbnailEdit = () => {
  const [showModal, setShowModal] = useState(false);
  const [avatar, setAvatar] = useState({
    id: 0,
    img: "/images/avatar/avater0.png",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileEditSchema),
    defaultValues: {
      username: "Golden user",
      email: "bn2022so@gmail.com",
      phone: "+42 723 123-432",
    },
  });

  const handleSaveUsername = (data) => {
    console.log("Save username:", data.username);
    // Add your API call here
  };

  const handleVerifyEmail = (data) => {
    console.log("Verify email:", data.email);
    // Add your API call here
  };

  const handleVerifyPhone = (data) => {
    console.log("Verify phone:", data.phone);
    // Add your API call here
  };

  const { isMobile } = useScreenSize();
  return (
    <>
      <div className="edit-card card ">
        <div className="card-body">
          <div className="edit-card__back">
            <Link href="/profile" className="btn btn--dark icon-button">
              <ShevronLeft />
            </Link>
            <h2 className="title">{t("Edit Profile")}</h2>
          </div>
          <div className="edit-card__thumb">
            <span className="thumb">
              <Image src={avatar.img} alt={"profile"} fill />
            </span>
            <span className="change-thumb">
              <button
                onClick={() => setShowModal(true)}
                className="btn btn--base icon--button"
              >
                <CameraIcon />
                {t("CHANGE AVATAR")}
              </button>
            </span>
          </div>
          <div className="edit-card__name">
            <form onSubmit={handleSubmit(handleSaveUsername)}>
              <div className="edit-card__input mb-0">
                <div className="form-group mb-0">
                  <label htmlFor="username" className="form--label">
                    {t("User Name")}
                  </label>
                  <input
                    type="text"
                    className="form--control"
                    placeholder=""
                    id="username"
                    {...register("username")}
                  />
                </div>
                {isMobile ? (
                  <button
                    type="submit"
                    className="btn btn--base icon-button w-44 h-44"
                  >
                    <SaveIcon />
                  </button>
                ) : (
                  <button type="submit" className="btn btn--base">
                    {t("SAVE")}
                  </button>
                )}
              </div>
              <ErrorMessage message={errors.username?.message} />
            </form>
            <span className="message">
              {t("profile_no_special_symbols_warning")}
            </span>
          </div>

          <div className="edit-info">
            <h3 className="edit-card__title">{t("Contact Info")}</h3>
            <form onSubmit={handleSubmit(handleVerifyEmail)}>
              <div className="edit-card__input">
                <div className="form-group mb-0">
                  <label htmlFor="email" className="form--label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form--control"
                    placeholder=""
                    id="email"
                    {...register("email")}
                  />
                </div>
                {isMobile ? (
                  <button
                    type="submit"
                    className="btn btn--base icon-button w-44 h-44"
                  >
                    <VerifyIcon />
                  </button>
                ) : (
                  <button type="submit" className="btn btn--base">
                    {t("VERIFY")}
                  </button>
                )}
              </div>
              <ErrorMessage message={errors.email?.message} />
            </form>
            <form onSubmit={handleSubmit(handleVerifyPhone)}>
              <div className="edit-card__input mb-0">
                <DropDown data={dropdownData} />
                <div className="form-group mb-0">
                  <label htmlFor="phone" className="form--label">
                    {t("Phone Number")}
                  </label>

                  <input
                    type="text"
                    className="form--control"
                    placeholder=""
                    id="phone"
                    {...register("phone")}
                  />
                </div>

                {isMobile ? (
                  <button
                    type="submit"
                    className="btn btn--base icon-button w-44 h-44"
                  >
                    <VerifyIcon />
                  </button>
                ) : (
                  <button type="submit" className="btn btn--base">
                    {t("VERIFY")}
                  </button>
                )}
              </div>
              <ErrorMessage message={errors.phone?.message} />
            </form>
            {isMobile && (
              <div className="text-center">
                <button className="btn btn--base icon-button w-100">
                  <SaveIcon /> {t("Save & Back")}
                </button>
                <Link href="/profile" className="line-button">
                  {t("CHANGE PASSWORD")}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <ChangeAvatarModal
        show={showModal}
        setAvatar={setAvatar}
        avatar={avatar}
        handleClose={() => setShowModal(false)}
      />
    </>
  );
};

export default ThumbnailEdit;
