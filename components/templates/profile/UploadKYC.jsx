"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ApproveIcon from "@/components/svg/others/ApproveIcon";
import UploadIcon from "@/components/svg/others/UploadIcon";
import FileIcon from "@/components/svg/others/FileIcon";
import DeleteIcon from "@/components/svg/others/DeleteIcon";

const UploadKYC = ({ data }) => {
  const [approveState, setApproveState] = useState(data.isApproved);
  const [inputDoc, setInputDoc] = useState(null);

  function handleFileChange(e) {
    const file = e.target.files[0];
    setInputDoc(file);
    setApproveState(1);
  }
  function handleRemove() {
    console.log("clickeed");

    setInputDoc(null);
    setApproveState(0);
  }
  console.log(approveState);

  function SowInput() {
    switch (approveState) {
      case 0:
        return (
          <label className="kyc-card__input-upload">
            <input className="d-none" type="file" onChange={handleFileChange} />
            <span className="btn btn--base h-44">
              <UploadIcon /> {t("UPLOAD")}
            </span>
          </label>
        );
      case 1:
        console.log(approveState);

        return (
          <div className="kyc-card__input-file">
            <FileIcon />
            <span className="text">Passport.jpg</span>
            <span className="remove-icon" role="button" onClick={handleRemove}>
              <DeleteIcon />
            </span>
          </div>
        );
      default:
        return (
          <div className="kyc-card__input-file approved">
            <ApproveIcon />
            <span className="text">{t("APPROVED")}</span>
          </div>
        );
    }
  }
  return (
    <div className="kyc-list">
      <div className="kyc-card">
        <div className="kyc-card__header">
          <h2 className="kyc-card__title">{data.name}</h2>
          <div className="kyc-card__thumb">
            <Image fill alt="card-thumb" src={data.img} />
          </div>
        </div>
        {data.isTab && (
          <div className="kyc-card__switch">
            <label htmlFor="id-primary">
              <input
                className="d-none"
                defaultChecked
                type="radio"
                name="id"
                id="id-primary"
              />
              <span className="text">{t("PRIMARY")}</span>
            </label>
            <label htmlFor="id-selfie">
              <input className="d-none" type="radio" name="id" id="id-selfie" />
              <span className="text">{t("SELFIE & ID")}</span>
            </label>
          </div>
        )}
        <div
          className="kyc-card__desc"
          dangerouslySetInnerHTML={{ __html: data.desc }}
        />
        <div className="kyc-card__input-box">{SowInput()}</div>
        <div className="kyc-card__input-info">jpg, png, pdf. Max size 10MB</div>
      </div>
    </div>
  );
};

export default UploadKYC;
