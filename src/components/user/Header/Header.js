import React from "react";
import "./Header.css";
import DropMenu from "../DropMenu/DropMenu";
import LogoHeader from "../../../assets/images/FconLogo.jpg"
import { useNavigate } from "react-router-dom";
const Header = () => {

  

  /* NAVIGATE TO PAGE  ------------------- */
  const navigate = useNavigate();
  const onNavRoute = (endpoint) => {
    navigate(endpoint)
  }

  return (
    <div className="Header">
      {/* Logo  */}
      <div className="navbar-header">
        <div className="logo" onClick={() => onNavRoute('/')}>
          <img src={LogoHeader} alt="header-logo-img" />
        </div>
      </div>

      {/* Dropdown menu  */}
      <div className="navbar-main">
        <DropMenu/>
      </div>

      {/* Auth header */}
      <div className="auth-header">
        <div className="auth-button register" onClick={() => onNavRoute('/register')}>
          <i className="bi bi-person"></i>
          <span>Register</span>
        </div>
        <div className="line"></div>
        <div className="auth-button login" onClick={() => onNavRoute('/login')}>
          <i className="bi bi-person-lock"></i>
          <span>Login</span>
        </div>
        <div className="project-add">
          <i className="bi bi-plus"></i>
          Post a project
        </div>
      </div>
    </div>
  );
};

export default Header;
