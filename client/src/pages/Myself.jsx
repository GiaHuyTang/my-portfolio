import React from "react";
import Avatar from "../assets/icons/Business-Cat.jpg";

function Myself() {
  return (
    <>
      {/* Personal intro section with avatar + card info */}
      <div className="myself-section py-5">
        <div className="container">
          <div className="row justify-content-center align-items-start g-4">

            {/* Portrait Avatar Card (left side) */}
            <div className="col-12 col-md-4 d-flex justify-content-center">
              <div className="card portrait-card p-2 shadow pixel-card text-center">
                <img
                  src={Avatar}
                  alt="Portrait"
                  className="img-fluid pixel-img"
                  style={{ height: "220px" }}
                />
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
                  Diploma in Computer Systems Technology (2024–2027)
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
