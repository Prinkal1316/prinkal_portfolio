import emailSpam from "../assets/images/Email_spam.png";
import martialArt from "../assets/images/Martial_art.png";
import compilerImg from "../assets/images/compiler2.png";

function Projects() {
  return (
    <section id="projects" className="bg-dark text-white py-5 min-vh-100">
      <div className="px-4 px-md-5">

        <div className="row mb-5 justify-content-start">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold text-center mb-4">My Projects</h1>
            <div
              className="border-top border-light w-25 mx-auto mb-4"
              style={{ borderWidth: "3px" }}
            />
            <p className="text-secondary">
              A selection of projects that reflect my skills, creativity, and
              problem-solving ability.
            </p>
          </div>
        </div>

        {/* PROJECT 1 */}
        <div className="row align-items-center mb-5 g-4">
          <div className="col-md-6">
            <img
              src={emailSpam}
              className="img-fluid rounded-3"
              style={{ filter: "grayscale(100%)" }}
              alt="Email Spam Detection"
            />
          </div>
          <div className="col-md-6">
            <div className="px-3 px-md-5">
              <h3>Email Spam Detection</h3>
              <p className="text-secondary">
                Machine learning based email spam detection system with smart
                keyword highlighting and Flask backend.
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/Prinkal1316/compiler-project" // ← Replace with actual live demo link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light me-3"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/Prinkal1316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        

        </div>

        {/* PROJECT 2 */}
        <div className="row align-items-center mb-5 g-4 flex-md-row-reverse">
          <div className="col-md-6">
            <img
              src={martialArt}
              className="img-fluid rounded-3"
              style={{ filter: "grayscale(100%)" }}
              alt="Attendance Management System"
            />
          </div>
          <div className="col-md-6">
            <div className="px-3 px-md-5">
              <h3>Attendance Management System</h3>
              <p className="text-secondary">
                Real-time attendance tracking system using React, Node.js, and
                PostgreSQL.
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/Prinkal1316/compiler-project" // ← Replace with actual live demo link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light me-3"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/Prinkal1316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <img
              src={compilerImg}
              className="img-fluid rounded-3"
              style={{ filter: "grayscale(100%)" }}
              alt="Compiler for Java, Python, C++"
            />
          </div>
          <div className="col-md-6">
            <div className="px-3 px-md-5">
              <h3>Compiler for Java, Python, C++</h3>
              <p className="text-secondary">
                Centralized platform to manage college events, registrations,
                and announcements.
              </p>
              <div className="mt-3">
                <a
                  href="https://github.com/Prinkal1316/compiler-project" // ← Replace with actual live demo link
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-light me-3"
                >
                  View Project
                </a>
                <a
                  href="https://github.com/Prinkal1316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;

