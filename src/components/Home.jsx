import React, { useState } from "react";
import Projects from "./Projects";
import { Navigate, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="home"
      className="bg-dark text-white min-vh-100 d-flex align-items-center"
    >
      <div className="container-fluid px-4 px-md-5">
        <div className="row align-items-center g-5">
          {/* Profile Image */}
          <div className="col-lg-5 text-center">
            <img
              src="/src/assets/images/profetional_photo.jpeg"
              alt="Prinkal Chavan"
              className="img-fluid rounded-circle shadow-lg"
              style={{
                width: "300px",
                height: "300px",
                objectFit: "cover",
                filter: "grayscale(100%)",
                border: "6px solid #555",
              }}
            />
          </div>

          {/* Text & Buttons */}
          <div className="col-lg-7">
            <div className="ps-lg-5">
              <h1 className="display-4 fw-bold text-center mb-3">
                My Portfolio
              </h1>
              <div
                className="border-top border-light w-25 mx-auto mb-4"
                style={{ borderWidth: "3px" }}
              />

             

              <p className="lead text-secondary mb-5 fs-5">
                I am a Frontend React Developer creating clean and modern web
                experiences using React and Bootstrap.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn btn-light btn-lg px-5 py-3 fw-semibold shadow"
                  onClick={() => navigate("/projects")}
                >
                  Explore My Projects
                </button>
                <button
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold"
                  onClick={() => setShowVideo(true)}
                >
                  Play Video
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          role="dialog"
          style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
          onClick={() => setShowVideo(false)}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            role="document"
          >
            <div className="modal-content bg-dark border-0">
              <div className="modal-header border-0">
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowVideo(false)}
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="ratio ratio-16x9">
                  <video controls autoPlay className="w-100 h-100">
                    <source
                      src="/src/components/img/20251225-1125-56.9492579.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
