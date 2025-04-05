import React from "react";
import "../css/global.css";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div className="grid-layout">
    <div className="left-column">
      <Link to="/" style={{ textDecoration: "none" }}>
        <button className="home-link">Home</button>
      </Link>
      <Link to="/pages/Projects" style={{ textDecoration: "none" }}>
        <button className="projects-link">View Projects</button>
      </Link>
      <Link to="/pages/Blog" style={{ textDecoration: "none" }}>
        <button className="blog-link">Blog</button>
      </Link>
      <Link to="/pages/Quotes" style={{ textDecoration: "none" }}>
        <button className="quotes-link">Quotes</button>
      </Link>
      <Link to="/pages/About" style={{ textDecoration: "none" }}>
        <button className="about-link">About Me</button>
      </Link>
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