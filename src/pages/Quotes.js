import React from "react";
import "../css/global.css";
import { Link } from "react-router-dom";
const Quote = () => {
  return (
  <div>
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
    <div className="center-column"></div>
    <div className="right-column">
        <h3>Quotes</h3>
        <ul>
          <li>Quote 1</li>
          <li>Quote 2</li>
          <li>Quote 3</li>
        </ul>
    </div>
  </div>
  </div>
  );
};
export default Quote;