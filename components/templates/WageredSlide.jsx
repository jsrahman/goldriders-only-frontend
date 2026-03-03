"use client";
import React, { useLayoutEffect, useMemo, useRef, useState } from "react";

const ICON_WIDTH = 16;
const CHAR_WIDTH = 8;
const PADDING = 5;

const WageredSlide = ({
  className = "",
  percent = 0,
  start = 0,
  end = 0,
  svg = null,
}) => {
  const containerRef = useRef(null);
  const [barWidth, setBarWidth] = useState(0);

  // Measure container width
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setBarWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const iconPercent = useMemo(() => {
    if (!barWidth) return 0;
    const minPercent = (ICON_WIDTH / barWidth) * 100;
    return Math.max(percent, minPercent);
  }, [percent, barWidth]);

  const iconPositionPx = useMemo(() => {
    return (iconPercent * barWidth) / 100 + 2.5;
  }, [iconPercent, barWidth]);

  const startOffset = useMemo(() => {
    const textWidth = start.toString().length * CHAR_WIDTH;
    const minSpace = textWidth + ICON_WIDTH + 12;

    return iconPositionPx < minSpace ? iconPositionPx + PADDING : null;
  }, [start, iconPositionPx]);

  return (
    <div className={`wagered-slider ${className}`} ref={containerRef}>
      <span
        className={`start ${startOffset ? "" : "text-dark"}`}
        style={startOffset ? { "--start": `${startOffset}px` } : undefined}
      >
        €{start}
      </span>

      <span className="icon" style={{ "--percent": `${iconPercent}%` }}>
        {svg}
      </span>

      <span className="end">€{end}</span>
    </div>
  );
};

export default WageredSlide;
