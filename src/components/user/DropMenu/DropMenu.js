import React from "react";
import "./DropMenu.css";
import { useNavigate } from "react-router-dom";

const DropMenu = () => {
  // Employers Data
  const employers = [
    {
      sub: "Freelancer",
      href: "/",
      ref: [
        {
          sub: "Freelancer List",
          href: "/members",
        },
      ],
    },
    {
      sub: "Dashboard",
      ref: [],
    },
    {
      sub: "My profile",
      ref: [],
    },
    {
      sub: "Projects",
      href: "/projects",
      ref: [],
    },
    {
      sub: "Membership",
      ref: [],
    },
    {
      sub: "Milestones",
      ref: [],
    },
    {
      sub: "Payments",
      ref: [],
    },
    {
      sub: "Setting",
      ref: [],
    },
  ];

  // Freelancers Data
  const freelancer = [
    {
      sub: "Projects",
      ref: [],
      href: "/projects",
    },
    {
      sub: "Dashboard",
      ref: [],
    },
    {
      sub: "My profile",
      ref: [],
    },
    {
      sub: "Membership",
      ref: [],
    },
    {
      sub: "Change Password",
      ref: [],
    },
    {
      sub: "Payments",
      ref: [],
    },
    {
      sub: "Setting",
      ref: [],
    },
  ];


  // Pages data
  const pages = [
    {
      sub: "About us",
      ref: [],
      href: "/about-us",
    },
    {
      sub: "Login",
      ref: [],
      href: "/login",
    },
    {
      sub: "Register",
      ref: [],
      href: "/register",
    }
  ];

  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div className="DropMenu">
      <div className="nav-list">
        <div className="nav-item nav-dropmenu" onClick={() => onNavRoute("/")}>
          <span>Home</span>
        </div>

        {/* Employees */}
        <div className="nav-item nav-dropmenu">
          <span>For employers</span>
          <i className="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {employers.map((item) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (item.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                  key={item.sub}
                >
                  {item.sub}
                  {item.ref.length > 0 && (
                    <i className="bi bi-chevron-right"></i>
                  )}
                  {item.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {item.ref.map((refer) => {
                        return (
                          <div
                            className="sub-nav-item"
                            key={refer.sub}
                            onClick={() => onNavRoute(refer.href)}
                          >
                            {refer.sub}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Freelancer */}
        <div className="nav-item nav-dropmenu">
          <span>For freelancer</span>
          <i className="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {freelancer.map((item) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (item.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                  key={item.sub}
                  onClick={() => onNavRoute(item.href ? item.href : "")}
                >
                  {item.sub}
                  {item.ref.length > 0 && (
                    <i className="bi bi-chevron-right"></i>
                  )}
                  {item.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {item.ref.map((refer) => {
                        return (
                          <div
                            className="sub-nav-item"
                            key={refer.sub}
                            onClick={onNavRoute(refer.href)}
                          >
                            {refer.sub}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Pages */}
        <div className="nav-item nav-dropmenu">
          <span>Pages</span>
          <i className="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {pages.map((item) => {
              return (
                <div
                  className={
                    "sub-nav-item" + (item.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                  key={item.sub}
                  onClick={() => onNavRoute(item.href ? item.href : "")}
                >
                  {item.sub}
                  {item.ref.length > 0 && (
                    <i className="bi bi-chevron-right"></i>
                  )}
                  {item.ref.length > 0 && (
                    <div className="nav-ref-container">
                      {item.ref.map((refer) => {
                        return (
                          <div
                            className="sub-nav-item"
                            key={refer.sub}
                            onClick={onNavRoute(refer.href)}
                          >
                            {refer.sub}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Blogs */}
        <div className="nav-item nav-dropmenu" onClick={() => onNavRoute("/blogs")}>
          <span>Blogs</span>
        </div>

        <div className="nav-item nav-dropmenu">
          <span>Admin console</span>
        </div>
      </div>
    </div>
  );
};

export default DropMenu;
