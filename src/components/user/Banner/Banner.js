import React from "react";
import "./Banner.css";
import CustomSelect from "../CustomSelect/CustomSelect";
import BannerSVG from "../../../assets/images/banner-img.svg";


const Banner = () => {
  const options = [
    { value: "option1", label: "Select" },
    { value: "option2", label: "Project" },
    { value: "option3", label: "Freelancer" },
  ];
  return (
    <div className="Banner">
      <div className="banner-wrapper">
        <div className="banner-content">
          <div className="rating">
            <div className="star">
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
              <i class="bi bi-star-fill"></i>
            </div>
            <span>Trused by over 2M+ users</span>
          </div>
          <div className="typho-hero">
            <h2>Get The Perfect </h2>
            <h2 class="orange-text">Developers &amp; Projects</h2>
          </div>
          <div className="short-desc">
            <span>
              There are many variations of passages of the Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour.
            </span>
          </div>
          <div className="search-bar">
            <div className="select-drop">
                <CustomSelect options={options} placeholder="Select" />
            </div>
            <div className="input-keywords">
              <input type="text" placeholder="Keywords" />
            </div>
            <div className="search-btn">Search</div>
          </div>
        </div>
        <div className="banner-vector">
            <img src={BannerSVG} alt="banner=img"/>
        </div>
      </div>
    </div>
  );
};

export default Banner;
