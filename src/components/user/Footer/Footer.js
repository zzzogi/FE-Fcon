import React from "react";
import "./Footer.css";
import LogoFooter from "../../../assets/images/FconLogo.jpg";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer-info">
        <div className="logo">
          <img src={LogoFooter} alt="logo-footer" />
        </div>
        <p>
          We’re always in search for talented and motivated people. Don’t be shy
          introduce yourself!
        </p>
        <ul>
          <li>
            <a href='true'>
              <i className="fa-brands fa-facebook-f" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='true'>
              <i className="fa-brands fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='true'>
              <i className="fa-brands fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href='true'>
              <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
        </ul>
        <button>Contact with us</button>
      </div>
      <div className="footer-services">
        <div className="service">
          <div className="title">
            <h2>Useful Links</h2>
          </div>
          <div className="content">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                About us
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Blogs
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Login
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Register
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Forgot Password
              </li>
            </ul>
          </div>
        </div>
        <div className="service">
          <div className="title">
            <h2>Help & Support</h2>
          </div>
          <div className="content">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                Browse Candidates
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Dashboard
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Job Packages
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Jobs Featured
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Post A Job
              </li>
            </ul>
          </div>
        </div>
        <div className="service">
          <div className="title">
            <h2>Other Links</h2>
          </div>
          <div className="content">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                Freelancers
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Freelancer Details
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Project
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Project Details
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Post Project
              </li>
            </ul>
          </div>
        </div>
        <div className="service">
          <div className="title">
            <h2>Connect With Us</h2>
          </div>
          <div className="content">
            <ul>
              <li>
                <i className="bi bi-chevron-right"></i>
                Chat
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Faq
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Reviews
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Privacy Policy
              </li>
              <li>
                <i className="bi bi-chevron-right"></i>
                Terms of use
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="copyright-text text-center">
          <p>Copyright 2024 © KofeJob. All right reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
