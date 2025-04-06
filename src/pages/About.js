import React from "react";
import "../css/global.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_website3.jpg";
import logo2 from "../assets/Logo_website4.jpg";
const About = () => {
  return (
    <div className="grid-layout">
    <div className="left-column">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="home-link"><img src={logo} alt="Logo" className="logo-icon" />
        Home</button>
      </Link>
      <Link to="/pages/Projects" style={{ textDecoration: "none" }}>
        <button className="projects-link"><img src={logo} alt="Logo" className="logo-icon" />View Projects</button>
      </Link>
      <Link to="/pages/Blog" style={{ textDecoration: "none" }}>
        <button className="blog-link"><img src={logo} alt="Logo" className="logo-icon" />Blog</button>
      </Link>
      <Link to="/pages/Quotes" style={{ textDecoration: "none" }}>
        <button className="quotes-link"><img src={logo} alt="Logo" className="logo-icon" />Quotes</button>
      </Link>
      <Link to="/pages/About" style={{ textDecoration: "none" }}>
        <button className="about-link"><img src={logo} alt="Logo" className="logo-icon" />About Me</button>
      </Link>
      <img src={logo2} alt="Logo" className="logo2-icon" />
    </div>
    <div className="center-column">
        <h3>About Me</h3>
        <p>
          Hi, I'm Filipe, a passionate developer with a love for creating
          innovative solutions. Explore my projects and learn more about me!
        </p>
    </div>
  </div>
  );
};
export default About;