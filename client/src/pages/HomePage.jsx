import React from "react";
import RunningCharacters_Gif from "../components/RunningCharacters_Gif.jsx";
import CozyRoom_Gif from "../components/CozyRoom_Gif.jsx";

function HomePage() {
  return (
    <>
      {/* Intro Section — Text on left, pixel cozy room on right */}
      <div className="introduction row">
        <div className="intro-text col-12 col-md-7">
          <div className="typing-text">
            <h1 className="typed-line">Hi there</h1>
            <h1 className="typed-line-end">This is Huy Tang</h1>
          </div>

          <p>And you’re visiting my closet</p>
          <p>— a space where I store my passion for programming, coding, and,</p>
          <p>&nbsp; occasionally, some random thoughts about myself.</p>
        </div>

        <div className="cozy-room col-12 col-md-5">
          <CozyRoom_Gif />
        </div>
      </div>

      {/* Walking character animation (just for fun visuals) */}
      <div className="walking-wrapper col-12">
        <div className="walking-character">
          <RunningCharacters_Gif />
        </div>
      </div>
    </>
  );
}

export default HomePage;
