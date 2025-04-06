import React from "react";
import "../css/navbar.css";
import banner from "../assets/Banner_website2.jpg";
const Home = () => {
  return (
    <div>
      <section className="navbar">
      <div className="title">
      <img src={banner} alt="Techy Tales Banner" className="banner" />
      </div>
      </section>
    </div>
  );
};
export default Home;