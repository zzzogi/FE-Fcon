import React, { useState } from "react";
import Logo from "../../../assets/images/FconLogo.jpg";
import GoogleSVG from "../../../assets/images/icon/google-icon.svg";
import FacebookSVG from "../../../assets/images/icon/fb-icon.svg";
import AppleSVG from "../../../assets/images/icon/ios-icon.svg";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [inputTypeHidden, setInputTypeHidden] = useState({
    password: true,
    confirm: true,
  });

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formType, setFormType] = useState("freelancer");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  /* PASSWORD TYPE INPUT TOGGLE ------------------- */
  const toggleHidden = (name) => {
    setInputTypeHidden({
      ...inputTypeHidden,
      [name]: !inputTypeHidden[name]
    });
  };

  /* FORM TYPE INPUT CHANGE ------------------- */
  const onChangeFormType = (type) => {
    setFormType(type);
  };

  /* FORM DATA CHANGE HANDLER ------------------- */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  /* FORM SUBMISSION HANDLER ------------------- */
  const handleRegister = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await fetch("http://localhost:5052/api/Auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Username: formData.username,
          Email: formData.email,
          PasswordHash: formData.password,
          UserType: formType, // or assign as needed
          ContactInfo: "random", // or assign as needed
          CreatedAt: new Date().toISOString(), // Assign current timestamp
          UpdatedAt: new Date().toISOString() // Assign current timestamp
          // role: formType, // e.g., "freelancer" or "company"
        }),
      });

      const result = await response.json();

      if (response.ok) {
        navigate("/login"); // Redirect on successful registration
      } else {
        const result = await response.json();
        setError(result.message || "Registration failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="Register">
      <div className="register-content">
        <div className="register-header">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <p>We love to see you joining our community</p>
          <div className="register-options">
            <button
              onClick={() => onChangeFormType("freelancer")}
              className={formType === "freelancer" ? "form-active" : ""}
            >
              Freelancer
            </button>
            <button
              onClick={() => onChangeFormType("employee")}
              className={formType === "employee" ? "form-active" : ""}
            >
              Employee
            </button>
          </div>
        </div>

        <div className="register-form">
          <div className="form-input">
            <div className="input-block">
              <label className="focus-label">
                Username <span className="label-star"> *</span>
              </label>
              <input
                type="text"
                className="form-control floating"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="input-block">
              <label className="focus-label">
                Email <span className="label-star"> *</span>
              </label>
              <input
                type="email"
                className="form-control floating"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-block">
              <label className="focus-label">
                Password <span className="label-star"> *</span>
              </label>
              <div className="position-relative">
                <input
                  type={inputTypeHidden.password ? "password" : "text"}
                  className="form-control floating pass-input"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
            <div className="input-block">
              <label className="focus-label">
                Confirm Password <span className="label-star"> *</span>
              </label>
              <div className="position-relative">
                <input
                  type={inputTypeHidden.confirm ? "password" : "text"}
                  className="form-control floating pass-input"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <div
                  className="password-icon"
                  onClick={() => toggleHidden("confirm")}
                >
                  {inputTypeHidden.confirm ? (
                    <i className="bi bi-eye-slash"></i>
                  ) : (
                    <i className="bi bi-eye"></i>
                  )}
                </div>
              </div>
            </div>
            <div className="input-block input-check">
              <div className="position-relative">
                <input type="checkbox" className="checkmark" />
                <span>
                  I have read and agree to all <a href="#">Terms & Conditions</a>
                </span>
              </div>
            </div>
          </div>
          {error && <div className="error-message">{error}</div>}
          <div className="register-button">
            <button onClick={handleRegister}>
              Register now <i className="bi bi-arrow-right-short"></i>
            </button>
          </div>
          <div className="actions">
            <div className="action-line">
              <span>OR</span>
            </div>
            <div className="action-socials">
              {/* Social buttons */}
            </div>
            <div className="action-options">
              <div>
                Already have an account?{" "}
                <span className="signup-link" onClick={() => onNavRoute("/login")}>
                  Sign in
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
