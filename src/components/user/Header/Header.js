// import React from "react";
// import "./Header.css";
// import DropMenu from "../DropMenu/DropMenu";
// import LogoHeader from "../../../assets/images/FconLogo.jpg";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   /* NAVIGATE TO PAGE  ------------------- */
//   const navigate = useNavigate();
//   const onNavRoute = (endpoint) => {
//     navigate(endpoint);
//   };
//   const credenticals = Cookies.get("userType");

//   return (
//     <div className="Header">
//       <img
//         src={LogoHeader}
//         alt="header-logo-img"
//         onClick={() => onNavRoute("/")}
//         width={55 * 1.96629213483}
//         height={55}
//         style={{ cursor: "pointer" }}
//       />

//       {/* Dropdown menu  */}
//       <div className="navbar-main">
//         <DropMenu />
//       </div>

//       {/* Auth header */}
//       <div className="auth-header">
//         <div
//           className="auth-button register"
//           onClick={() => onNavRoute("/register")}
//         >
//           <i className="bi bi-person"></i>
//           <span>Register</span>
//         </div>
//         <div className="line"></div>
//         <div className="auth-button login" onClick={() => onNavRoute("/login")}>
//           <i className="bi bi-person-lock"></i>
//           <span>Login</span>
//         </div>
//         <div
//           className="project-add"
//           onClick={() => onNavRoute("/post-project")}
//         >
//           <i className="bi bi-plus"></i>
//           Post a project
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;
import React, { useEffect } from "react";
import "./Header.css";
import DropMenu from "../DropMenu/DropMenu";
import LogoHeader from "../../../assets/images/FconLogo.jpg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie to access cookies

const Header = () => {
  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  // Get userType from cookies
  const userType = Cookies.get("userType");

  // Log the cookie value whenever the page is loaded
  useEffect(() => {
    console.log("userType cookie value:", userType);
  }, [userType]);

  // Handle logout (delete cookies)
  const handleLogout = () => {
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

      {/* Auth header */}
      <div className="auth-header">
        {/* Conditionally render based on the presence of the userType cookie */}
        {!userType ? (
          <>
            <div
              className="auth-button register"
              onClick={() => onNavRoute("/register")}
            >
              <i className="bi bi-person"></i>
              <span>Register</span>
            </div>
            <div className="line"></div>
            <div className="auth-button login" onClick={() => onNavRoute("/login")}>
              <i className="bi bi-person-lock"></i>
              <span>Login</span>
            </div>
          </>
        ) : (
          <div className="auth-button logout" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
            <span>Logout</span>
          </div>
        )}

        <div className="project-add" onClick={() => onNavRoute("/post-project")}>
          <i className="bi bi-plus"></i>
          Post a project
        </div>
      </div>
    </div>
  );
};

export default Header;
