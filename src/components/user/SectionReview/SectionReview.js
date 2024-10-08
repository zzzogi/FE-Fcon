import React from "react";
import Work2 from "../../../assets/images/work2.jpg";
import Work3 from "../../../assets/images/work3.jpg";
import Work1 from "../../../assets/images/work1.jpg";
import Recent1 from "../../../assets/images/recent-icon-01.svg";
import Recent2 from "../../../assets/images/recent-icon-02.svg";
import Recent3 from "../../../assets/images/recent-icon-03.svg";
import "./SectionReview.css";

const SectionReview = () => {
  return (
    <div className="SectionReview">
      <div className="section-images">
        <div className="work-set-image">
          <div className="work-set">
            <img
              src={Work1}
              alt="Img"
              class="img-fluid mb-2 aos aos-init aos-animate"
            />
          </div>
          <div className="work-set mutil-img">
            <img
              src={Work2}
              alt="Img"
              class="img-fluid mb-2 aos aos-init aos-animate"
            />
            <img
              src={Work3}
              alt="Img"
              class="img-fluid mb-2 aos aos-init aos-animate"
            />
          </div>
        </div>
      </div>
      <div className="section-content">
        <h2>Get Expert in Less Time and Our Work Process</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="demand-list">
          <div className="demand-item">
            <div class="demand-image">
              <img src={Recent1} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">
              <h6>Post a job</h6>
              <p>
                Publish the job posting on your selected platforms. Follow the
                specific submission process for each platform.
              </p>
            </div>
          </div>
          <div className="demand-item">
            <div class="demand-image">
              <img src={Recent2} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">
              <h6>Hire Freelancers</h6>
              <p>
                Depending on the platform, you can either wait for freelancers
                to apply or invite specific freelancers to submit proposals.
              </p>
            </div>
          </div>
          <div className="demand-item">
            <div class="demand-image">
              <img src={Recent3} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">
              <h6>Get Work Done</h6>
              <p>
                Utilize productivity tools and apps to help you stay organized,
                manage tasks, and set reminders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionReview;
