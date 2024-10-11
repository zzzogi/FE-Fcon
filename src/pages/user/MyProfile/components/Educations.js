import React from "react";
import "../layout.css";
import Report from "../../../../assets/images/icon/report.png";

export const Educations = ({ educations }) => {
  return (
    <div class="company-detail-block company-description">
      <h4 class="company-detail-title">Education</h4>
      {educations.map((education) => {
        return (
          <div class="experience-set">
            <div class="experience-set-img">
              <img src={Report} alt="img" />
            </div>
            <div class="experience-set-content">
              <h5>
                {education.title}
                <span>
                  {education.fromYear} - {education.toYear}
                </span>
              </h5>
              <span>{education.address}</span>
              <p>{education.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
