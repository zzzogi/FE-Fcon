import React from "react";
import "./Header.css";
import "../DropMenu/DropMenu.css";
import DropMenu from "../DropMenu/DropMenu";
import LogoHeader from "../../../assets/images/FconLogo.jpg";
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../../context/userContext";
import Notifications from "react-notifications-menu";

const Header = () => {
  const { userInfo, update } = useUserContext();
  /* NAVIGATE TO PAGE  ------------------- */
  const navigate = useNavigate();
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
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

      {/* Dropdown menu  */}
      <div className="navbar-main">
        <DropMenu />
      </div>

      {/* Notification */}
      {userInfo.userId ? (
        <Notifications
          height="500px"
          width="500px"
          data={[
            {
              image: Avatar1,
              message: "Kameshwaran S just sent you a proposal.",
              detailPage: "/proposal",
            },
          ]}
        />
      ) : null}

      {/* Auth header */}
      {!userInfo.userId ? (
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
                  <span>Adam Levine</span>
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
                        <div
                          className="sub-nav-item"
                          onClick={() => {
                            update({ ...userInfo, userId: 0 });
                            alert("Bạn đã đăng xuất");
                            navigate("/");
                          }}
                        >
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
              Post a project
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
