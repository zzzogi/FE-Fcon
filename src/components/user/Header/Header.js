import React, { useEffect } from "react";
import "./Header.css";
import "../DropMenu/DropMenu.css";
import DropMenu from "../DropMenu/DropMenu";
import LogoHeader from "../../../assets/images/FconLogo.png";
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";
import { useNavigate } from "react-router-dom";
import Notifications from "react-notifications-menu";
import Cookies from "js-cookie"; // Import js-cookie to access cookies

const Header = () => {
  /* NAVIGATE TO PAGE  ------------------- */
  const navigate = useNavigate();
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  // Get userType and userName from cookies
  const userType = Cookies.get("userType");
  const userName = Cookies.get("username"); // Set default value if userName is undefined

  // Log the cookie value whenever the page is loaded
  useEffect(() => {
    console.log("userType cookie value:", userType);
    console.log("userName cookie value:", userName);
  }, [userType, userName]);

  // Handle logout (delete cookies)
  const handleLogout = () => {
    alert("Bạn đã đăng xuất");
    Cookies.remove("userType"); // Remove userType cookie
    Cookies.remove("token"); // If you have a token cookie, remove it as well
    navigate("/"); // Redirect to the login page
  };

  return (
    <div className="Header">
      <img
        src={LogoHeader}
        alt="header-logo-img"
        onClick={() => onNavRoute("/")}
        width={55 * 1.96629213483}
        height={55}
        style={{ cursor: "pointer" }}
      />

      {/* Dropdown menu */}
      <div className="navbar-main">
        <DropMenu />
      </div>

      {/* Notification */}
      {userType ? (
        <Notifications height="500px" width="500px" data={[]} />
      ) : null}

      {/* Auth header */}
      {!userType ? (
        <div className="auth-header">
          <div
            className="auth-button register"
            onClick={() => onNavRoute("/register")}
          >
            <i className="bi bi-person"></i>
            <span>Register</span>
          </div>
          <div className="line"></div>
          <div
            className="auth-button login"
            onClick={() => onNavRoute("/login")}
          >
            <i className="bi bi-person-lock"></i>
            <span>Login</span>
          </div>
        </div>
      ) : (
        <>
          <div className="navbar-main">
            <div className="DropMenu">
              <div className="nav-list">
                <div className="nav-item nav-dropmenu">
                  <img
                    src={Avatar1}
                    alt="profile"
                    style={{
                      borderRadius: "50%",
                      width: "35px",
                      height: "35px",
                    }}
                  />
                  {/* Display userName with a fallback */}
                  <span>{userName}</span>
                  <div className="nav-menu-container">
                    <div className="sub-nav-drop">
                      <div className="nav-ref-container">
                        <div
                          className="sub-nav-item"
                          onClick={() => onNavRoute("/proposal")}
                        >
                          My proposals
                        </div>
                      </div>
                      <div className="nav-ref-container">
                        <div
                          className="sub-nav-item"
                          onClick={() => onNavRoute("/user-setting")}
                        >
                          User setting
                        </div>
                      </div>
                      <div className="nav-ref-container">
                        <div className="sub-nav-item" onClick={handleLogout}>
                          Log out
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="auth-header">
            <div
              className="project-add"
              onClick={() => onNavRoute("/post-project")}
            >
              <i className="bi bi-plus"></i>
              Post a Blog
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
