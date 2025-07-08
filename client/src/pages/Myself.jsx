import React from "react";
import { useState } from "react";
import Avatar from "../assets/icons/Business-Cat.jpg";
import portfolio from "../assets/documents/GiaHuyTang_portfolio.docx";
import HTML_icon from "../assets/icons/HTML.png";
import CSS_icon from "../assets/icons/CSS.png";
import Javascript_icon from "../assets/icons/javascript.png";
import Bootstrap_icon from "../assets/icons/bootstrap.png";
import ReactJS_icon from "../assets/icons/reactJS.png";
import Java_icon from "../assets/icons/java.png";
import ASPNET_icon from "../assets/icons/ASPNET.png";
import SQL_icon from "../assets/icons/SQL.png";
import MongoDB_icon from "../assets/icons/mongoDB.png";
import Cplusplus_icon from "../assets/icons/C++.png";
import Python_icon from "../assets/icons/python.png";
import jQuery_icon from "../assets/icons/jQuery.png";
import Tailwind_icon from "../assets/icons/tailwind.png";

function Myself() {
  const [activePopup, setActivePopup] = useState(null);
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = portfolio; 
    link.download = "GiaHuyTang_Portfolio.docx";
    link.click();
  };


  return (
    <>
      {/* Personal intro section with avatar + card info */}
      <div className="myself-section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-start g-4">

            {/* Portrait Avatar Card (left side) */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              {/* Avatar Card */}
              <div className="card portrait-card p-2 shadow pixel-card text-center">
                <img
                  src={Avatar}
                  alt="Portrait"
                  className="img-fluid pixel-img"
                  style={{ height: "220px" }}
                />
              </div>

              {/* Download Button (Below Avatar) */}
              <div className="mt-3">
                <button className="download-btn" onClick={handleDownload}>
                  <i class="hn hn-copy-solid"></i> Download Portfolio
                </button>
              </div>
            </div>


            {/* About + Education Card (right side) */}
            <div className="col-12 col-md-8">
              <div className="card about-card p-4 shadow pixel-card">
                <h2 className="card-title">About Me</h2>
                <p className="card-text">
                  Hi! I’m Gia Huy Tang — code wizard at Saskatchewan Polytechnic 🧙‍♂️💻 <br />
                  I build magical websites, craft software spells, tame bugs, and collect rare UI pixels like treasure chests.
                  Frontend, backend, or dragon — if it glitches, I fix it.
                </p>

                <h3 className="mt-4">Education</h3>
                <p className="card-text">
                  Saskatchewan Polytechnic <br />
                  Diploma in Business Information System (2024–2027)
                </p>
              </div>

            </div>

          </div>

          {/* Programming Language */}
          <div className="row">
            <div className="col-12 col-md-8 offset-md-4">
              <h2 className="mt-4">Programming Skill Board</h2>
            </div>

            <div className="skill-buttons text-center">
              <button onClick={() => setActivePopup("mastered")}><i class="hn hn-gaming"></i> Mastered</button>
              <button onClick={() => setActivePopup("leveling")}><i class="hn hn-startups"></i> Leveling Up</button>
              <button onClick={() => setActivePopup("newbie")}><i class="hn hn-seedlings-solid"></i> Newbie</button>
            </div>

            {activePopup && (
              <div className="skill-popup-overlay" onClick={() => setActivePopup(null)}>
                <div className="skill-popup-card" onClick={(e) => e.stopPropagation()}>
                  <button className="close-btn" onClick={() => setActivePopup(null)}>×</button>
                  <h3>
                    {activePopup === "mastered" && "🎮 Mastered"}
                    {activePopup === "leveling" && "🚧 Leveling Up"}
                    {activePopup === "newbie" && "🕹️ Newbie"}
                  </h3>
                  <p>
                    {activePopup === "mastered" && "Languages I’m confident in and have used in real-world projects"}
                    {activePopup === "leveling" && "Languages I am actively learning, building with, or gaining hands-on experience with"}
                    {activePopup === "newbie" && "Languages I have just learned the foundations and haven't built anything with them yet"}
                  </p>

                  <div className="icon-list">
                    {activePopup === "mastered" && (
                      <>
                        <img src={HTML_icon} alt="HTML icon" className="pixel-logo" />
                        <img src={CSS_icon} alt="CSS icon" className="pixel-logo" />
                        <img src={Javascript_icon} alt="Javscript icon" className="pixel-logo" />
                        <img src={Bootstrap_icon} alt="Bootstrap icon" className="pixel-logo-with-title" />
                        <img src={ReactJS_icon} alt="ReactJS icon" className="pixel-logo-with-title" />
                        <img src={ReactJS_icon} alt="ReactJS icon" className="pixel-logo-with-title" />
                        <img src={Tailwind_icon} alt="Tailwind icon" className="pixel-logo-with-title" />
                      </>
                    )}
                    {activePopup === "leveling" && (
                      <>
                        <img src={Java_icon} alt="Java icon" className="pixel-logo" />
                        <img src={ASPNET_icon} alt="ASP.NET icon" className="pixel-logo" />
                        <img src={SQL_icon} alt="SQL icon" className="pixel-logo" />
                        <img src={MongoDB_icon} alt="MongoDB icon" className="pixel-logo" />
                      </>
                    )}
                    {activePopup === "newbie" && (
                      <>
                        <img src={Cplusplus_icon} alt="C++ icon" className="pixel-logo" />
                        <img src={Python_icon} alt="Python icon" className="pixel-logo" />
                        <img src={jQuery_icon} alt="jQuery icon" className="pixel-logo" />
                      </>
                    )}
                  </div>
                </div>
              </div>
            )}


          </div>

        </div>
      </div>
    </>
  );
}

export default Myself;
