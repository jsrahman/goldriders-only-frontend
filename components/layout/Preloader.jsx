"use client";
import React, { useEffect } from "react";

/*
    Need to a Preloader design when first time scripted load it hide brocken layout
*/

const Preloader = () => {
  useEffect(() => {
    const preloader = document.querySelector(".preloader");
    setTimeout(() => {
      preloader.classList.add("hide");
    }, 1000);
  }, []);
  return (
    <div className="preloader">
      <div className="loader-p"></div>
    </div>
  );
};

export default Preloader;
