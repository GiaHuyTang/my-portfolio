import React, { useState } from "react";
import Portfolio_Img from "../assets/icons/projectsPage/portfolioSite.png";
import F1Tracker_Img from "../assets/icons/projectsPage/f1Tracker.png";
import TheMovieDB_Img from "../assets/icons/projectsPage/theMoviedb.png";
import BasicML_Img from "../assets/icons/projectsPage/basic_ML.png";

const projects = [
  {
    id: "proj1",
    name: "F1 Tracker (Idea)",
    description:
      "A React + API project that fetches F1 data from F1api.dev and shows all F1 informations including the previous races and live updates of the ongoing race with rankings of the racers and race information.",
    tech: ["HTML", "CSS", "JavaSript", "ReactJS", "Tailwind", "F1 API"],
    image: F1Tracker_Img,
  },
  {
    id: "proj2",
    name: "Portfolio Site",
    description:
      "This portfolio site was crafted with React, deployed via Vercel, and styled with nostalgic pixel aesthetics.",
    tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "ReactJS", "Vercel"],
    image: Portfolio_Img,
  },
  {
    id: "proj3",
    name: "The Movie Database",
    description:
      "A website using themoviedb API to show popular, NowPlaying or Upcoming movies. It has 2 versions: ReactJS and ASP.NET.",
    tech: [
      "JavaScript",
      "HTML",
      "CSS",
      "ASP.NET",
      "SQL",
      "C#",
      "ReactJS",
      "Bootstrap",
      "TMDB API",
    ],
    image: TheMovieDB_Img,
  },
  {
    id: "proj4",
    name: "Taxi Fare Regression & Rice Quality Classification",
    description:
      "Two Colab notebooks—one that predicts NYC taxi fares with linear regression and another that classifies rice quality via binary classification. Covers data prep, TensorFlow model training, and visualization.",
    tech: [
      "Python",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Google Colab",
      "Jupyter Notebook",
    ],
    image: BasicML_Img
  },
];

function Projects() {
  const [activePopup, setActivePopup] = useState(null);

  const openPopup = (id) => {
    setActivePopup(id);
  };

  const closePopup = () => {
    setActivePopup(null);
  };

  return (
    <div className="project-page">
      <h1 className="title">
        <i className="hn hn-gaming"></i> Choose Your Map
      </h1>
      <div className="map-grid">
        {projects.map((project) => (
          <div
            className="map-tile-bg"
            key={project.id}
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="tile-overlay">
              <h3>{project.name}</h3>
              <button
                className="play-button"
                onClick={() => openPopup(project.id)}
              >
                <i className="hn hn-play"></i> Play
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Popup section */}
      {activePopup && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              ✖
            </button>
            <h2>{projects.find((p) => p.id === activePopup).name}</h2>
            <p>{projects.find((p) => p.id === activePopup).description}</p>
            <div className="tech-stack-line">
              <h4>Tech Stack:</h4>
              <p>
                {projects.find((p) => p.id === activePopup).tech.join(" | ")}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
