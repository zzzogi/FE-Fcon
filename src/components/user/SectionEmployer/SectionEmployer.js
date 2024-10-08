import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import "./SectionEmployer.css";
import image1 from "../../../assets/images/icon/achievement-1.svg";
import image2 from "../../../assets/images/icon/achievement-2.svg";
import image3 from "../../../assets/images/icon/achievement-3.svg";
import image4 from "../../../assets/images/icon/achievement-4.svg";


const SectionEmployer = () => {
  return (
    <div className="SectionEmployer">
      <div className="section-title">
        <CustomTitle
          title="Achievement We Have Earned"
          desc="At Freelancer, we believe that talent is borderless and opportunity should be too."
        />
      </div>
      <div className="section-content">
        <div className="project-list">
          <div className="project-item">
            <div class="feature-icon">
              <img src={image1} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">671</h3>
              <p>Freelance developers</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image2} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">671</h3>
              <p>Freelance developers</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image3} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">610</h3>
              <p>Freelance developers</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image4} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">71</h3>
              <p>Freelance developers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionEmployer;
