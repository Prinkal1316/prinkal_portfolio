import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

function NavbarComp() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location]);

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
      className="shadow-sm border-bottom border-secondary/30 transition-all duration-300"
      style={{ backgroundColor: "#121212" }} 
    >
      <div className="container-fluid px-4 px-md-5">
        <Navbar.Brand
          as={Link}
          to="/"
          className="fw-bold fs-4 text-white tracking-tight hover:text-gray-200 transition-colors duration-200"
        >
          Prinkal Chavan
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto flex items-center gap-1 md:gap-2">
            {["/", "/about", "/projects", "/contact"].map((path, idx) => {
              const label = ["Home", "About", "Projects", "Contact"][idx];
              const isActive = location.pathname === path;

              return (
                <Nav.Link
                  key={path}
                  as={Link}
                  to={path}
                  className={`text-white/90 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "border-b-2 border-white font-semibold"
                      : "hover:bg-white/10 hover:border-b-2 hover:border-white/70"
                  }`}
                  onClick={() => setExpanded(false)}
                >
                  {label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavbarComp;