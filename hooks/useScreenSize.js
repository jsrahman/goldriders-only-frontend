import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => {
      setIsMobile(false);
      setIsTablet(false);
      setIsDesktop(false);

      setScreenSize(window.innerWidth);
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else if (window.innerWidth < 1200) {
        setIsTablet(true);
      } else {
        setIsDesktop(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize, isMobile, isTablet, isDesktop };
};

export default useScreenSize;
