import React from 'react'

const LevelForward = ({
    width = 48,
    height = 22,
    stroke = "#34FF45"
}) => {

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 48 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.15"
                d="M1 1L11 11L1 21"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.5"
                d="M10 1L20 11L10 21"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M19 1L29 11L19 21"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.5"
                d="M28 1L38 11L28 21"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                opacity="0.15"
                d="M37 1L47 11L37 21"
                stroke={stroke}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default LevelForward