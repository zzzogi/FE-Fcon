import React from "react";
import Experience from "../../../../assets/images/icon/expereience.png";

const Experiences = ({ experiences }) => {
  return (
    <div class="company-detail-block company-description">
      <h4 class="company-detail-title">Experience</h4>
      {experiences.map((experience) => {
        return (
          <div class="experience-set">
            <div class="experience-set-img">
              <img src={Experience} alt="img" />
            </div>
            <div class="experience-set-content">
              <h5>
                {experience.title}
                <span>
                  {experience.fromYear} - {experience.toYear}
                </span>
              </h5>
              <span>{experience.role}</span>
              <p>{experience.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experiences;
