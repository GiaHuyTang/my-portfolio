import React, { useState, useEffect } from "react";
import EatingHamster from "../assets/icons/eatingHamster.gif";

export default function LoadingScreen() {
  const [dotCount, setDotCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev < 3 ? prev + 1 : 0));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <img src={EatingHamster} alt="eatingHamster" className="hamster-gif" />
      <h1>
        Feeding the hamsters that power the website &nbsp;.&nbsp;
        <span className="dots">
          <span className={dotCount >= 1 ? "dot visible" : "dot"}>.&nbsp;</span>
          <span className={dotCount >= 2 ? "dot visible" : "dot"}>.&nbsp;</span>
          <span className={dotCount >= 3 ? "dot visible" : "dot"}>.&nbsp;</span>
        </span>
      </h1>
    </div>
  );
}