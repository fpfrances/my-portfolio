import React from "react";
import "../css/global.css";
import { Link } from "react-router-dom";
import logo from "../assets/Logo_website3.jpg";
import logo2 from "../assets/Logo_website4.jpg";
const Quote = () => {
  return (
  <div>
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
      <h3>Hey there!👋 Brace yourself — this is my digital wonderland!</h3>
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
    <div className="right-column">
        <h3>Quotes</h3>
          <p>"The best way to predict the future is to create it." — Abraham Lincoln</p>
          <p>"You never know how strong you are until being strong is your only choice." — Bob Marley</p>
          <p>"Some people want it to happen, some wish it would happen, others make it happen." — Michael Jordan</p>
          <p>"You must be the change you wish to see in the world." — Mahatma Gandhi</p>
    </div>
  </div>
  </div>
  );
};
export default Quote;