import React from "react";
import "./DropMenu.css";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to access cookies

const DropMenu = () => {
  const userType = Cookies.get("userType");
  // Employers Data
  const employers = [
    {
      sub: "Freelancer",
      href: "/members",
      ref: [],
    },
    {
      sub: "My profile",
      href: "/company-profile",
      ref: [],
    },
    {
      sub: "Projects",
      href: "/projects",
      ref: [],
    },
  ];

  // Freelancers Data
  const freelancer = [
    {
      sub: "Projects",
      href: "/projects",
      ref: [],
    },
    {
      sub: "My profile",
      href: "/developer-profile",
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
    },
  ];

  // Blogs data
  const blogs = [
    {
      sub: "Blog List",
      ref: [],
      href: "/blogs",
    },
    {
      sub: "My blogs",
      ref: [],
      href: "/my-blogs",
    },
  ];

  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    console.log(endpoint);
    navigate(endpoint);
  };

  return (
    <div className="DropMenu">
      <div className="nav-list">
        <div className="nav-item nav-dropmenu" onClick={() => onNavRoute("/")}>
          <span>Home</span>
        </div>

        {/* Employees */}
        {userType === "company" && (
          <>
            <div className="nav-item nav-dropmenu">
              <span>For employers</span>
              <i className="bi bi-chevron-down"></i>
              <div className="nav-menu-container">
                {employers.map((item) => {
                  return (
                    <div
                      className={
                        "sub-nav-item" +
                        (item.ref.length > 0 ? " sub-nav-drop" : "")
                      }
                      key={item.sub}
                      onClick={() => {
                        if (item.ref.length === 0) {
                          onNavRoute(item.href ? item.href : "#");
                        }
                        return;
                      }}
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
                                onClick={() => {
                                  console.log(refer.href);
                                  onNavRoute(refer.href);
                                }}
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
          </>
        )}

        {/* Freelancer */}
        {userType === "freelancer" && (
          <>
            <div className="nav-item nav-dropmenu">
              <span>For freelancer</span>
              <i className="bi bi-chevron-down"></i>
              <div className="nav-menu-container">
                {freelancer.map((item) => {
                  return (
                    <div
                      className={
                        "sub-nav-item" +
                        (item.ref.length > 0 ? " sub-nav-drop" : "")
                      }
                      key={item.sub}
                      onClick={() => {
                        if (item.ref.length === 0) {
                          onNavRoute(item.href ? item.href : "#");
                        }
                        return;
                      }}
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
          </>
        )}

        {/* Pages */}
        <div className="nav-item nav-dropmenu">
          <span>Pages</span>
          <i className="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {pages.map((item) => {
              return (
                <div
                  className={
                    "sub-nav-item" +
                    (item.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                  key={item.sub}
                  onClick={() => onNavRoute(item.href ? item.href : "#")}
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

        {/* Membership */}
        <div
          className="nav-item nav-dropmenu"
          onClick={() => onNavRoute("/membership")}
        >
          <span>Membership</span>
        </div>

        {/* Blogs */}
        <div className="nav-item nav-dropmenu">
          <span>Blogs</span>
          <i className="bi bi-chevron-down"></i>
          <div className="nav-menu-container">
            {blogs.map((item) => {
              return (
                <div
                  className={
                    "sub-nav-item" +
                    (item.ref.length > 0 ? " sub-nav-drop" : "")
                  }
                  key={item.sub}
                  onClick={() => {
                    if (item.ref.length === 0) {
                      onNavRoute(item.href ? item.href : "#");
                    }
                    return;
                  }}
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
        {userType === "admin" && (
          <>
            <div
              className="nav-item nav-dropmenu"
              onClick={() => (window.location.href = "/admin")}
            >
              <span>Admin console</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DropMenu;
