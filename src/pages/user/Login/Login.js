import React, { useState } from "react";
import "./Login.css";
import Logo from "../../../assets/images/FconLogo.jpg";
import GoogleSVG from "../../../assets/images/icon/google-icon.svg";
import FacebookSVG from "../../../assets/images/icon/fb-icon.svg";
import AppleSVG from "../../../assets/images/icon/ios-icon.svg";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Import js-cookie for handling cookies
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const apiUrl = process.env.REACT_APP_API_URL;

const Login = () => {
  const [inputTypeHidden, setInputTypeHidden] = useState({
    password: true,
  });
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();

  /* PASSWORD TYPE INPUT TOGGLE ------------------- */
  const toggleHidden = (name) => {
    var inputType = inputTypeHidden;
    inputType[name] = !inputType[name];
    setInputTypeHidden({ ...inputType });
  };

  /* HANDLE INPUT CHANGE ------------------- */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* FETCH CURRENT USER AFTER LOGIN ------------------- */
  const fetchCurrentUser = async (token) => {
    try {
      const response = await fetch(`${apiUrl}/User/getCurrentUser`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          accept: "*/*",
        },
      });

      if (response.ok) {
        const result = await response.json();
        Cookies.set("userId", result.userId, { expires: 7 }); // Set cookie for userId
        Cookies.set("userType", result.userType, { expires: 7 }); // Set cookie for userType
        console.log("Current user data:", result);
      } else {
        console.log("Failed to fetch current user");
      }
    } catch (error) {
      console.error("Error fetching current user:", error);
    }
  };

  /* HANDLE LOGIN API CALL ------------------- */
  const handleLogin = async () => {
    try {
      const response = await fetch(`${apiUrl}/Auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: formData.userName,
          Password: formData.password,
        }),
      });
      const result = await response.json();

      if (response.ok) {
        console.log("Login successful", result);
        toast.success("Login successfully!", {
          position: "top-center",
        });
        const token = result.data;
        Cookies.set("token", token, { expires: 7 }); // Set cookie for token
        
        // Fetch current user details using the token
        await fetchCurrentUser(token);
        localStorage.setItem("loginSuccess", "true");
        console.log(localStorage);
        navigate("/"); // Redirect to dashboard on successful login
      } else {
        console.log("Login failed", result);
        toast.error(result.message || "Login failed. Please try again.", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  /* ON NAVIGATE TO PAGE ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div className="Login">
      <div className="background-wrapper"></div>
      <div className="login-content">
        <div className="login-header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>Welcome! Nice to see you again</p>
        </div>
        <div className="login-form">
          <div className="form-input">
            <div className="input-block">
              <label className="focus-label">
                User Name <span className="label-star"> *</span>
              </label>
              <input
                type="text"
                name="userName"
                value={formData.userName}
                onChange={handleInputChange}
                className="form-control floating"
              />
            </div>
            <div className="input-block">
              <label className="focus-label">
                Password <span className="label-star"> *</span>
              </label>
              <div className="position-relative">
                <input
                  type={inputTypeHidden.password ? "password" : "text"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="form-control floating pass-input"
                />
                <div
                  className="password-icon"
                  onClick={() => toggleHidden("password")}
                >
                  {inputTypeHidden.password ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="login-button">
            <button onClick={handleLogin}>Login now</button>
          </div>
          <div className="actions">
            <div className="action-line">
              <span>OR</span>
            </div>
            <div className="action-socials">
              <div className="social-btn">
                <div className="social-icon">
                  <img src={GoogleSVG} alt="icon social" />
                </div>
                <span>Google</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={FacebookSVG} alt="icon social" />
                </div>
                <span>Facebook</span>
              </div>
              <div className="social-btn">
                <div className="social-icon">
                  <img src={AppleSVG} alt="icon social" />
                </div>
                <span>Apple</span>
              </div>
            </div>
            <div className="action-options">
              <div>
                Have you an account yet?{" "}
                <span
                  className="signup-link"
                  onClick={() => onNavRoute("/register")}
                >
                  Signup
                </span>
              </div>
              <div className="forgot-password">
                <span>Forgot password</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Include the ToastContainer for rendering toast messages */}
      <ToastContainer />
    </div>
  );
};

export default Login;
