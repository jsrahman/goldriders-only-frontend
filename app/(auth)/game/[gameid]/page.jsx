import React from 'react'
import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import CTA from '@/components/sections/CTA/CTA'
import GameControl from '@/components/sections/GameControl'

const GamePage = () => {
    return (
        <div className="content-area">
            <Header />
            <GameControl />
            <CTA />
            <Footer />
        </div>
    )
}

export default GamePage 