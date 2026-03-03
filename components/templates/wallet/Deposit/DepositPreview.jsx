
import React from "react";
import Image from "next/image";
import cardThumb from "@/public/images/thumbs/card.png";
import ChevronArrow from "@/components/svg/others/ChevronArrow";
import { useTranslations } from "next-intl";

const DepositPreview = () => {
    const t = useTranslations("wallet");
    return (
        <div className="deposit-preview">
            <h2 className="deposit-preview-title">{t("payAmount", { amount: "800 USD" })}</h2>
            <div className="deposit-preview-thumb mb-20">
                <Image src={cardThumb} alt="card-thumb" />
                <button className="btn">
                    <ChevronArrow />
                </button>
            </div>
            <h2 className="mb-20 text-center">{t("justOneMoreStep")}</h2>
            <p className="deposit-preview-desc mb-20">
                {t("depositPreviewDesc")}
            </p>
            <button className="btn btn--base">{t("proceed")}</button>
        </div>
    );
};

export default DepositPreview;