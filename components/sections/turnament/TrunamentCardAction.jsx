import InfoIcon from '@/components/svg/others/InfoIcon'
import React from 'react'
import { useTranslations } from "next-intl";

const TrunamentCardAction = () => {
    const t = useTranslations();
    return (
        <div className="turnament-card__btn">
            <button className="btn btn--base">{t("common.depositNow")}</button>
            <button className="btn btn--dark icon-button"><InfoIcon /></button>
        </div>
    )
}

export default TrunamentCardAction