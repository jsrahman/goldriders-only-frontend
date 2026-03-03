import React from 'react'
import ScreenIcon from '../svg/game-control/ScreenIcon'
import DualModeIcon from '../svg/game-control/DualModeIcon'
import FourModeIcon from '../svg/game-control/FourModeIcon'
import FullScreenIcon from '../svg/game-control/FullScreenIcon'
import SearchInput from '../layout/search/SearchInput'
import LoveIcon from '../svg/others/LoveIcon'
import CloseIcon from '../svg/others/CloseIcon'
import { useTranslations } from 'next-intl'

const GameControl = () => {
    const t = useTranslations('games')
    return (
        <>    <section className='game-view'>
            <div className="game-view__header">
                <h4 className="game-view__title">{t("demoGameTitle")}</h4>
                <div className="game-view__control">
                    <div className="screen-control tabs">
                        <button className="btn tab active">
                            <ScreenIcon />
                        </button>
                        <button className="btn tab">
                            <DualModeIcon />
                        </button>
                        <button className="btn tab">
                            <FourModeIcon />
                        </button>
                        <button className="btn tab">
                            <FullScreenIcon />
                        </button>
                    </div>
                    <div className="screen-switch  tabs">
                        <button className="real-money tab  active">{t("realMoney")}</button>
                        <button className="demo-money tab">{t("demoMode")}</button>
                    </div>
                </div>
                <SearchInput placeholder={t("searchGamePlaceholder")} />
                <div className="game-react">
                    <button className="btn btn--dark  icon-button">
                        <LoveIcon />
                    </button>
                    <button className="btn btn--dark  icon-button">
                        <CloseIcon />
                    </button>
                </div>
            </div>
            <div className="game-body"></div>
        </section></>
    )
}

export default GameControl