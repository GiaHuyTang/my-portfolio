import React from "react";
import { useState } from "react";
import Avatar from "../assets/icons/myselfPage/business-cat.jpg";
import portfolio from "../assets/documents/GiaHuyTang_portfolio.docx";
import HTML_icon from "../assets/icons/myselfPage/html.png";
import CSS_icon from "../assets/icons/myselfPage/css.png";
import Javascript_icon from "../assets/icons/myselfPage/javascript.png";
import Bootstrap_icon from "../assets/icons/myselfPage/bootstrap.png";
import ReactJS_icon from "../assets/icons/myselfPage/reactjs.png";
import Java_icon from "../assets/icons/myselfPage/java.png";
import ASPNET_icon from "../assets/icons/myselfPage/aspnet.png";
import SQL_icon from "../assets/icons/myselfPage/sql.png";
import MongoDB_icon from "../assets/icons/myselfPage/mongodb.png";
import Cplusplus_icon from "../assets/icons/myselfPage/cplusplus.png";
import Python_icon from "../assets/icons/myselfPage/python.png";
import jQuery_icon from "../assets/icons/myselfPage/jquery.png";
import Tailwind_icon from "../assets/icons/myselfPage/tailwind.png";
import NodeJS_icon from "../assets/icons/myselfPage/nodejs.png";
import Csharp_icon from "../assets/icons/myselfPage/csharp.png";
import NextJS_icon from "../assets/icons/myselfPage/nextjs.png";

function Myself() {
  const [activePopup, setActivePopup] = useState(null);
  const skillCards = [
    {
      title: "❄️ Web Wizardry",
      content:
        "I craft magical websites, tame backend beasts, and collect rare UI pixels like treasure. Whether it’s frontend, backend, or a fire-breathing bug — if it glitches, I fix it.",
      className: "web-card",
    },
    {
      title: "🪄 Network Sorcery",
      content:
        "I summon networks from OSI layers to AWS VPCs with subnets, gateways, ACLs, and structured cabling. I speak fluent TCP/IP and decode JSON scrolls like ancient runes.",
      className: "network-card",
    },
    {
      title: "📚 Data Alchemy",
      content:
        "When data calls, I wield NumPy, Pandas, and matplotlib — slicing CSVs, scraping the web, and visualizing insights like prophecy. My spells turn raw data into clarity.",
      className: "data-card",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? skillCards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === skillCards.length - 1 ? 0 : prev + 1));
  };

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
            {/* === Left Column: Avatar + Download Button + Programming Skill Board === */}
            <div className="col-12 col-md-4 d-flex flex-column align-items-center">
              <div className="card portrait-card p-2 shadow pixel-card text-center">
                <img
                  src={Avatar}
                  alt="Portrait"
                  className="img-fluid pixel-img"
                  style={{ height: "220px" }}
                />
              </div>
              <div className="mt-3">
                <button className="download-btn" onClick={handleDownload}>
                  <i className="hn hn-paperclip"></i> Download Portfolio
                </button>
              </div>

              {/* === Programming Skill Board === */}
              <div className="w-100 mt-4">
                <h2 className="text-center">Programming Skill Board</h2>

                {/* Buttons to reveal each level */}
                <div className="skill-buttons text-center mb-3">
                  <button onClick={() => setActivePopup("mastered")}>
                    <i className="hn hn-gaming"></i> Mastered
                  </button>
                  <button onClick={() => setActivePopup("leveling")}>
                    <i className="hn hn-startups"></i> Leveling Up
                  </button>
                  <button onClick={() => setActivePopup("newbie")}>
                    <i className="hn hn-seedlings-solid"></i> Newbie
                  </button>
                </div>

                {/* Pop-up when you click a button */}
                {activePopup && (
                  <div
                    className="skill-popup-overlay"
                    onClick={() => setActivePopup(null)}
                  >
                    <div
                      className="skill-popup-card"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <button
                        className="close-btn"
                        onClick={() => setActivePopup(null)}
                      >
                        ×
                      </button>
                      <h3>
                        {activePopup === "mastered" && (
                          <>
                            <i className="hn hn-gaming"></i> Mastered
                          </>
                        )}
                        {activePopup === "leveling" && (
                          <>
                            <i className="hn hn-startups"></i> Leveling Up
                          </>
                        )}
                        {activePopup === "newbie" && (
                          <>
                            <i className="hn hn-seedlings-solid"></i> Newbie
                          </>
                        )}
                      </h3>
                      <p>
                        {activePopup === "mastered" && (
                          <>
                            Languages I’m confident in and have used in
                            real-world projects
                          </>
                        )}
                        {activePopup === "leveling" && (
                          <>
                            Languages I am actively learning, building with, or
                            gaining hands-on experience with
                          </>
                        )}
                        {activePopup === "newbie" && (
                          <>
                            Languages I have just learned the foundations and
                            haven't built anything with them yet
                          </>
                        )}
                      </p>

                      <div className="icon-list text-center">
                        {activePopup === "mastered" && (
                          <>
                            <img
                              src={HTML_icon}
                              alt="HTML icon"
                              className="pixel-logo"
                            />
                            <img
                              src={CSS_icon}
                              alt="CSS icon"
                              className="pixel-logo"
                            />
                            <img
                              src={Javascript_icon}
                              alt="Javascript icon"
                              className="pixel-logo"
                            />
                            <img
                              src={Bootstrap_icon}
                              alt="Bootstrap icon"
                              className="pixel-logo-with-title"
                            />
                            <img
                              src={ReactJS_icon}
                              alt="ReactJS icon"
                              className="pixel-logo-with-title"
                            />
                            <img
                              src={Tailwind_icon}
                              alt="Tailwind icon"
                              className="pixel-logo-with-title"
                            />
                          </>
                        )}
                        {activePopup === "leveling" && (
                          <>
                            <img
                              src={Java_icon}
                              alt="Java icon"
                              className="pixel-logo"
                            />
                            <img
                              src={ASPNET_icon}
                              alt="ASP.NET icon"
                              className="pixel-logo"
                            />
                            <img
                              src={Csharp_icon}
                              alt="C# icon"
                              className="pixel-logo"
                            />
                            <img
                              src={SQL_icon}
                              alt="SQL icon"
                              className="pixel-logo"
                            />
                            <img
                              src={MongoDB_icon}
                              alt="MongoDB icon"
                              className="pixel-logo"
                            />
                            <img
                              src={Python_icon}
                              alt="Python icon"
                              className="pixel-logo"
                            />
                            <img
                              src={NextJS_icon}
                              alt="NextJS icon"
                              className="pixel-logo-with-title"
                            />
                          </>
                        )}
                        {activePopup === "newbie" && (
                          <>
                            <img
                              src={Cplusplus_icon}
                              alt="C++ icon"
                              className="pixel-logo"
                            />
                            <img
                              src={NodeJS_icon}
                              alt="NodeJs icon"
                              className="pixel-logo"
                              style={{ width: "80px" }}
                            />
                            <img
                              src={jQuery_icon}
                              alt="jQuery icon"
                              className="pixel-logo"
                            />
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-center mt-2">
                  <i className="hn hn-trophy-solid"></i> Pick a level to unlock
                  your coding arsenal!
                </p>
              </div>
            </div>

            {/* === Right Column: About + Skills + Education === */}
            <div className="col-12 col-md-8">
              <div className="card about-card p-4 shadow pixel-card">
                <h2 className="card-title">About Me</h2>
                <h3>
                  Hi! I’m Gia Huy Tang — code wizard at Saskatchewan Polytechnic
                  🧙‍♂️💻
                </h3>

                <div className="desktop-only">
                  {/* Desktop View: 3 Cards */}
                  <div className="accordion-container">
                    <div className="card pixel-card web-card p-3 mb-3">
                      <h4>🕸️ Web Wizardry</h4>
                      <p>
                        I craft magical websites, tame backend beasts, and
                        collect rare UI pixels like treasure. Whether it’s
                        frontend, backend, or a fire-breathing bug — if it
                        glitches, I fix it.
                      </p>
                    </div>

                    <div className="card pixel-card network-card p-3 mb-3">
                      <h4>📡 Network Sorcery</h4>
                      <p>
                        I summon networks from OSI layers to AWS VPCs with
                        subnets, gateways, ACLs, and structured cabling. I speak
                        fluent TCP/IP and decode JSON scrolls like ancient
                        runes.
                      </p>
                    </div>

                    <div className="card pixel-card data-card p-3">
                      <h4>📊 Data Alchemy</h4>
                      <p>
                        When data calls, I wield NumPy, Pandas, and matplotlib —
                        slicing CSVs, scraping the web, and visualizing insights
                        like prophecy. My spells turn raw data into clarity.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mobile-only">
                  {/* Mobile View: Carousel */}
                  <div className="skill-carousel text-center">
                    <div className="carousel-wrapper">
                      <button className="arrow-btn left" onClick={handlePrev}>
                        <i className="hn hn-arrow-left-solid"></i>
                      </button>

                      <div
                        className={`carousel-card pixel-card ${skillCards[currentIndex].className}`}
                      >
                        <h4>{skillCards[currentIndex].title}</h4>
                        <p>{skillCards[currentIndex].content}</p>
                      </div>

                      <button className="arrow-btn right" onClick={handleNext}>
                        <i className="hn hn-arrow-right-solid"></i>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Education Section */}
                <h3 className="mt-4">Education</h3>
                <p>
                  Saskatchewan Polytechnic <br />
                  Diploma in Business Information System (2024–2027)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myself;
