import React from "react";
import "./Footer.css";

import Github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={instagram} alt="" />
          <img src={Linkedin} alt="" />
        </div>
      </div>
      <div className="logo-f">
        <img src={Logo} alt="" />
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </footer>
  );
};

export default Footer;
