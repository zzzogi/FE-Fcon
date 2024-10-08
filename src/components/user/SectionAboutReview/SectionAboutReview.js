import React from "react";
import "./SectionAboutReview.css";
import CheckedIcon from "../../../assets/images/icon/checks.svg";
import Recent from "../../../assets/images/blog/abt3.png";

const SectionAboutReview = () => {
  return (
    <div className="SectionAboutReview">
      <div className="section-content">
        <h2>We unleash your business potential.</h2>
        <p>
        Through strategy, design, and planning we build brand identities that connect with your template. We then fine-tune a marketing plan that allows us to laser focus.
        </p>
        <div className="demand-list">
          <div className="demand-item">
            <div class="demand-image">
              <img src={CheckedIcon} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                dolorum unde, quibusdam eveniet nobis enim porro repudiandae
                nesciunt quidem.
              </p>
            </div>
          </div>
          <div className="demand-item">
            <div class="demand-image">
              <img src={CheckedIcon} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                dolorum unde, quibusdam eveniet nobis enim porro repudiandae
                nesciunt quidem.
              </p>
            </div>
          </div>
          <div className="demand-item">
            <div class="demand-image">
              <img src={CheckedIcon} alt="Img" class="img-fluid" />
            </div>
            <div class="demand-content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                modi, saepe hic esse maxime quasi, sapiente ex debitis quis
                dolorum unde, quibusdam eveniet nobis enim porro repudiandae
                nesciunt quidem.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="section-images">
        <div className="work-set-image">
          <div className="work-set">
            <img
              src={Recent}
              alt="Img"
              class="img-fluid mb-2 aos aos-init aos-animate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAboutReview;
