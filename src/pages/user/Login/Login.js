import React, { useState } from "react";
import "./Login.css";
import Logo from "../../../assets/images/FconLogo.jpg";
import GoogleSVG from "../../../assets/images/icon/google-icon.svg";
import FacebookSVG from "../../../assets/images/icon/fb-icon.svg";
import AppleSVG from "../../../assets/images/icon/ios-icon.svg";
import { useNavigate } from "react-router-dom";

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

  /* HANDLE LOGIN API CALL ------------------- */
  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5052/api/Auth/login", {
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
        alert("Login successful" );
        navigate("/"); // Redirect to dashboard on successful login
      } else {
        console.log("Login failed", result);
        alert(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
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
    </div>
  );
};

export default Login;
