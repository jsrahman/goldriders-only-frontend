import Arrow from "@/components/svg/others/Arrow";
import Link from "next/link";
import React, { useLayoutEffect, useState, useRef } from "react";

const NotificationItem = ({ title, desc, btn }) => {
  const [descToggle, setDescToggle] = useState("initial");
  const descRef = useRef(null);

  useLayoutEffect(() => {
    if (!descRef.current) return;

    if (descRef.current.scrollHeight > 70) {
      setDescToggle("show-toggle");
    }
  }, []);

  const handleDescToggle = () => {
    if (descToggle === "show-all") {
      setDescToggle("show-toggle");
      descRef.current.style.maxHeight = `70px`;
    } else {
      setDescToggle("show-all");
      descRef.current.style.maxHeight = `${descRef.current.scrollHeight}px`;
    }
  };

  return (
    <>
      <div className="notification-item">
        <p className="notification-item-date">13.11.2025, 05:46:39</p>
        <p className="notification-item-title">{title}</p>
        <div
          className="notification-item-desc"
          ref={descRef}
          dangerouslySetInnerHTML={{ __html: desc }}
        />

        {(descToggle === "show-all" || descToggle === "show-toggle") && (
          <button
            className="notification-item-desc-toggler"
            onClick={handleDescToggle}
          >
            <span className="text">
              {descToggle === "show-all" ? "SHOW LESS" : "SHOW ALL"}
            </span>
            <span className="icon">
              <Arrow />
            </span>
          </button>
        )}

        <Link href="#" className="btn btn--base no-shadow">
          {btn}
        </Link>
      </div>
    </>
  );
};

export default NotificationItem;
