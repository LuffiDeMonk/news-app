import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer p-0">
      <div className="d-flex">
        <div className="footer-icon">
          <FaFacebookF />
        </div>
        <div className="footer-icon">
          <FaLinkedinIn />
        </div>
        <div className="footer-icon">
          <FaTwitter />
        </div>
        <div className="footer-icon">
          <FaInstagram />
        </div>
      </div>
      <Link
        to="/"
        className="footer-logo text-uppercase text-dark text-decoration-none"
      >
        Magdesign
      </Link>
    </div>
  );
};

export default Footer;
