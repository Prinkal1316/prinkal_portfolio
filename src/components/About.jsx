function About() {
  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center mb-5">
          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src="/src/assets/images/dairy.jpeg"
              className="img-fluid rounded shadow"
              style={{ maxWidth: "300px", filter: "grayscale(100%)" }}
              alt="Prinkal Chavan"
            />
          </div>

          <div className="col-md-7">
            <h1 className="display-4 fw-bold text-center mb-4">About Me</h1>
            <div
              className="border-top border-light w-25 mx-auto mb-4"
              style={{ borderWidth: "3px" }}
            />

            <p className="text-secondary">
              Hello! I’m{" "}
              <span className="text-white fw-semibold">Prinkal Chavan</span>, a
              passionate front-end developer and aspiring software engineer. I
              enjoy creating clean, responsive, and user-friendly web
              applications.
            </p>

            <p className="text-secondary">
              I have hands-on experience with React, JavaScript, Bootstrap, and
              modern UI design practices. I love learning new technologies and
              applying them to solve real-world problems.
            </p>

            <p className="text-secondary">
              My goal is to build impactful digital products that combine strong
              functionality with elegant design.
            </p>
          </div>
        </div>

        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <div className="p-4 bg-dark rounded shadow h-100">
              <h5 className="fw-bold">Education</h5>
              <p className="text-secondary mb-0">
                Undergraduate – Computer Engineering
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 bg-dark rounded shadow h-100">
              <h5 className="fw-bold">Skills</h5>
              <p className="text-secondary mb-0">
                React, JavaScript, HTML, CSS, Bootstrap, Java
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="p-4 bg-dark rounded shadow h-100">
              <h5 className="fw-bold">Interests</h5>
              <p className="text-secondary mb-0">
                UI Design, Web Development, Problem Solving
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
