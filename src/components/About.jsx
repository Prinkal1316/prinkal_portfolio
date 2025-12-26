import diaryImg from "../assets/images/dairy.jpeg";

function About() {
  return (
    <section id="about" className="bg-dark text-white py-5">
      <div className="container">
        <div className="row align-items-center mb-5">

          <div className="col-md-5 text-center mb-4 mb-md-0">
            <img
              src={diaryImg}
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
              passionate front-end developer and aspiring software engineer.
            </p>

            <p className="text-secondary">
              I have hands-on experience with React, JavaScript, Bootstrap, and
              modern UI design practices.
            </p>

            <p className="text-secondary">
              My goal is to build impactful digital products that combine strong
              functionality with elegant design.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
