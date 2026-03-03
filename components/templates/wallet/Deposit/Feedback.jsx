import StarIcon from "@/components/svg/others/StarIcon";
import React from "react";
import { useTranslations } from "next-intl";

const Feedback = () => {
  const t = useTranslations("wallet");
  return (
    <div className="deposit-progress">
      <h2 className="mb-20">{t("feedback")}</h2>
      <h4>{t("feedbackQuestion")}</h4>

      <div className="rating-group mb-20">
        <input
          disabled
          checked
          className="rating__input"
          name="rating3"
          id="rating3-none"
          value="0"
          type="radio"
        />
        <label className="rating__label" htmlFor="rating3-1">
          <span className="rating__icon rating__icon--star">
            <StarIcon />
          </span>
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-1"
          value="1"
          type="radio"
        />
        <label className="rating__label" htmlFor="rating3-2">
          <span className="rating__icon rating__icon--star">
            <StarIcon />
          </span>
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-2"
          value="2"
          type="radio"
        />
        <label className="rating__label" htmlFor="rating3-3">
          <span className="rating__icon rating__icon--star">
            <StarIcon />
          </span>
        </label>
        <input
          className="rating__input"
          name="rating3"
          checked
          id="rating3-3"
          value="3"
          type="radio"
        />
        <label className="rating__label" htmlFor="rating3-4">
          <span className="rating__icon rating__icon--star">
            <StarIcon />
          </span>
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-4"
          value="4"
          type="radio"
        />
        <label className="rating__label" htmlFor="rating3-5">
          <span className="rating__icon rating__icon--star">
            <StarIcon />
          </span>
        </label>
        <input
          className="rating__input"
          name="rating3"
          id="rating3-5"
          value="5"
          type="radio"
        />
      </div>

      <div className="form-group">
        <div className="form-group">
          <label className="form--label">{t("leaveComment")}</label>
          <textarea type="text" className="form--control" placeholder="" />
        </div>
      </div>

      <button className="btn btn--base w-100">{t("submit.cap")}</button>
    </div>
  );
};
export default Feedback;
