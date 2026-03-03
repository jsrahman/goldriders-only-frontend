import React from "react";

const PlayIcon = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="60"
        width="60"
        height="60"
        rx="30"
        transform="rotate(-90 0 60)"
        fill="url(#paint0_linear_13866_16214)"
      />
      <path
        className="path-1"
        d="M23.998 22.7975C23.998 21.56 25.3427 20.791 26.4093 21.4184L38.6536 28.6209C39.7053 29.2395 39.7053 30.7605 38.6536 31.3791L26.4093 38.5816C25.3427 39.209 23.998 38.44 23.998 37.2025L23.998 22.7975Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_13866_16214"
          x1="60"
          y1="90"
          x2="0"
          y2="90"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFBF00" />
          <stop offset="1" stopColor="#FF9500" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default PlayIcon;
