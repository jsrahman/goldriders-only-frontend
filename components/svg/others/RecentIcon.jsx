import React from "react";

const RecentIcon = () => {
  return (
    <>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10Z"
          fill="#FFBF00"
          opacity="0.25"
        >
          <animate
            attributeName="opacity"
            values="0.25;0;0;0.25"
            keyTimes="0;0.25;0.5;1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M3.33398 9.33349C3.33398 6.01978 6.02028 3.3335 9.33398 3.3335H10.6673C13.981 3.3335 16.6673 6.01979 16.6673 9.3335V10.6668C16.6673 13.9805 13.981 16.6668 10.6673 16.6668H9.33398C6.02027 16.6668 3.33398 13.9805 3.33398 10.6668V9.33349Z"
          fill="#FFBF00"
          opacity="0.25"
        >
          <animate
            attributeName="opacity"
            values="0.25;0.25;0;0.25"
            keyTimes="0;0.25;0.5;1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>

        <path
          d="M10.0013 13.3337C11.8423 13.3337 13.3346 11.8413 13.3346 10.0003C13.3346 8.15938 11.8423 6.66699 10.0013 6.66699C8.16035 6.66699 6.66797 8.15938 6.66797 10.0003C6.66797 11.8413 8.16035 13.3337 10.0013 13.3337Z"
          fill="#FFBF00"
          opacity="1"
        >
          <animate
            attributeName="opacity"
            values="1;0.5;0.75;1"
            keyTimes="0;0.5;0.75;1"
            dur="1.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </>
  );
};

export default RecentIcon;
