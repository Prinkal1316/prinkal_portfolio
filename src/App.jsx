import { Routes, Route } from "react-router-dom";
import NavbarComp from "./components/NavbarComp";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop"
import "./App.css";


function App() {
  return (
    <>
      <NavbarComp />
      <ScrollToTop />

      <main className="pt-5 pt-md-5"> {/* pt-5 = ~80px top padding – adjust if needed */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;