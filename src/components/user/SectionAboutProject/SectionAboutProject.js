import React from "react";
import "./SectionAboutProject.css";
import image1 from "../../../assets/images/icon/great1.svg";
import image2 from "../../../assets/images/icon/great2.svg";
import image3 from "../../../assets/images/icon/great3.svg";
import image4 from "../../../assets/images/icon/great4.svg";
import CustomTitle from "../CustomTitle/CustomTitle";


const SectionAboutProject = () => {
  return (
    <div className="SectionAboutProject">
      <div className="section-title">
        <CustomTitle
          title="What’s great about it?"
          desc="All the features of kofejob below"
        />
      </div>
      <div className="section-content">
        <div className="project-list">
          <div className="project-item">
            <div class="feature-icon">
              <img src={image1} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">Browse Portfolios</h3>
              <p>Find professionals you can trust by browsing their samples of previous work .</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image2} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">Fast Bids</h3>
              <p>Receive obligation free quotes from our talented freelancers fast. 80% of projects get bid</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image3} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">Quality Work</h3>
              <p>Kofejob.com has by far the largest pool of quality freelancers globally- over 50 million to choose from.</p>
            </div>
          </div>
          <div className="project-item">
            <div class="feature-icon">
              <img src={image4} class="img-fluid" alt="Img" />
            </div>
            <div class="feature-content course-count">
              <h3 class="counter-up">Track Progress</h3>
              <p>Keep up-to-date and on-the-go with our time tracker Always know what freelancers are up to.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutProject;
