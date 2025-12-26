import React from "react";
import { toast, Toaster } from "react-hot-toast";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!", {
      style: {
        background: "#121212",
        color: "#ffffff",
        border: "1px solid #333",
      },
    });
    e.target.reset();
  };

  return (
    <section
      id="contact"
      className="bg-dark text-white min-vh-100 py-5 d-flex align-items-center"
    >
      <Toaster position="top-right"  />

      <div className="container-fluid px-4 px-md-5 px-lg-6">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-10">
           
            <h1 className="display-4 fw-bold text-center mb-4">Get in Touch</h1>
            <div
              className="border-top border-light w-25 mx-auto mb-4"
              style={{ borderWidth: "3px" }}
            />
          
         
            <p className="lead text-secondary text-center mb-5 fs-5">
              Feel free to reach out for collaboration, internships, or project
              discussions.
            </p>

         
            <div className="row g-4 justify-content-center mb-5">
              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card bg-dark border-light shadow-lg h-100 text-center p-4 rounded-4 transition-all hover-shadow-xl">
                  <i className="bi bi-telephone-fill fs-3 text-secondary mb-3 d-block"></i>
                  <h5 className="text-white fw-medium mb-2">Phone</h5>
                  <p className="text-secondary mb-0 fs-5 text-nowrap">
                    +91 9322881778
                  </p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card bg-dark border-light shadow-lg h-100 text-center p-4 rounded-4 transition-all hover-shadow-xl">
                  <i className="bi bi-envelope-fill fs-3 text-secondary mb-3 d-block"></i>
                  <h5 className="text-white fw-medium mb-2">Email</h5>
                  <a
                    href="mailto:prinkalchavan@email.com"
                    className="text-secondary mb-0 fs-5 text-nowrap hover-text-white text-decoration-none"
                  >
                    prinkalchavan@email.com
                  </a>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4">
                <div className="card bg-dark border-light shadow-lg h-100 text-center p-4 rounded-4 transition-all hover-shadow-xl">
                  <i className="bi bi-geo-alt-fill fs-3 text-secondary mb-3 d-block"></i>
                  <h5 className="text-white fw-medium mb-2">Location</h5>
                  <p className="text-secondary mb-0 fs-5 text-nowrap">
                    Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-secondary mb-5 fs-5">
              Check out my work on{" "}
              <a
                href="https://github.com/Prinkal1316"
                className="text-secondary hover-text-white fw-medium"
              >
                GitHub
              </a>
            </p>

         
            <div className="bg-dark border border-light rounded-4 p-4 p-md-5 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label
                      htmlFor="name"
                      className="form-label text-white fw-medium"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control bg-secondary bg-opacity-25 text-white border-light rounded-3 py-3"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label
                      htmlFor="email"
                      className="form-label text-white fw-medium"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control bg-secondary bg-opacity-25 text-white border-light rounded-3 py-3"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="col-12">
                    <label
                      htmlFor="message"
                      className="form-label text-white fw-medium"
                    >
                      Message
                    </label>
                    <textarea
                      className="form-control bg-secondary bg-opacity-25 text-white border-light rounded-3 py-3"
                      id="message"
                      rows="5"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-light btn-lg px-5 py-3 fw-bold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
