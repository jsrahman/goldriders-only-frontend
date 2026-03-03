import React from "react";

const FileIcon = ({ file = "#FFBF00" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
    >
      <path
        d="M1.5 16C1.08333 16 0.729167 15.8542 0.4375 15.5625C0.145833 15.2708 0 14.9167 0 14.5V1.5C0 1.08333 0.145833 0.729167 0.4375 0.4375C0.729167 0.145833 1.08333 0 1.5 0H8L12 4V14.5C12 14.9167 11.8542 15.2708 11.5625 15.5625C11.2708 15.8542 10.9167 16 10.5 16H1.5ZM7 5H10.5L7 1.5V5Z"
        fill={file}
      />
    </svg>
  );
};

export default FileIcon;
