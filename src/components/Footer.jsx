import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      className="text-white py-5 mt-auto"
      style={{
        background: " #121212",
        borderTop: "1px solid rgba(19, 14, 14, 0.1)",
      }}
    >
      <div className="container-fluid px-4 px-md-5">
        <Row className="g-5">
          
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-white">
              Prinkal Chavan
            </h5>
            <p className="text-secondary mb-3 fs-6">
              Frontend React Developer crafting clean, modern, and responsive web experiences.
            </p>
            <p className="small text-secondary mb-0">
              © {new Date().getFullYear()} Prinkal Chavan. All rights reserved.
            </p>
          </Col>

    
          <Col md={4}>
            <h5 className="fw-bold mb-3 text-white">
              Quick Links
            </h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/" className="text-secondary text-decoration-none hover-text-white fs-6">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/about" className="text-secondary text-decoration-none hover-text-white fs-6">
                  About
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/projects" className="text-secondary text-decoration-none hover-text-white fs-6">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary text-decoration-none hover-text-white fs-6">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>


          <Col md={4}>
            <h5 className="fw-bold mb-3 text-white">
              Get in Touch
            </h5>
            <ul className="list-unstyled mb-4">
              <li className="mb-2 d-flex align-items-center text-secondary fs-6">
                <i className="bi bi-telephone-fill me-2"></i>
                +91 9322881778
              </li>
              <li className="mb-2 d-flex align-items-center text-secondary fs-6">
                <i className="bi bi-envelope-fill me-2"></i>
                prinkal@email.com
              </li>
              <li className="mb-2 d-flex align-items-center text-secondary fs-6">
                <i className="bi bi-geo-alt-fill me-2"></i>
                Maharashtra, India
              </li>
            </ul>
          </Col>
        </Row>
      </div>
    </footer>
  );
}

export default Footer;