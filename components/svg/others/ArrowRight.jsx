import React from 'react'

const ArrowRight = ({ color = "white" }) => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 14L12 10L8 6" stroke={color} strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default ArrowRight