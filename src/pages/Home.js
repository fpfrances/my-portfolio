import React from "react";
import { Link } from "react-router-dom";
import "../css/global.css";

const Home = () => {
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
        <h3>Hey there!👋 Welcome to my digital corner of the internet.</h3>
        <p>
        <br></br>My name is Filipe, a Computer Engineer who loves mixing code, creativity, and a little caffeine to build cool things. 
          Here you'll find my projects, thoughts, and a glimpse into my world of tech.
          <br></br><br></br>🔧 Projects – From smart devices to interactive web apps, I like bringing ideas to life with code and hardware.<br></br>
          <br></br>💡 Skills – A peek into the tools, languages, and tech I use to make magic happen.<br></br>
          <br></br>📄 Resume – The official stuff: education, experience, and what I’ve been up to professionally.<br></br>
          <br></br>📬 Contact – Want to collab, chat tech, or just say hi? Let’s connect!<br></br>
          <br></br>Make yourself at home, click around, and I hope you find something that sparks your interest!
        </p>
    </div>
    </div>
  );
};

export default Home;