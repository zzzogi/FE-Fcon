import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import "./SectionJob.css";
import JobImg from "../../../assets/images/job1.png"
const SectionJob = () => {
  return (
    <div className="SectionJob">
      <div className="section-title">
        <CustomTitle
          title="Find Your Next Great Job Opportunity!"
          desc="Quisque pretium dolor turpis, quis blandit turpis semper ut. Nam malesuada eros nec luctus laoreet."
          position="left"
        />
      </div>

    <div className="section-image">
        <img src={JobImg} alt="img"/>
    </div>


      <div className="section-content">
            <button>Join now</button>
      </div>
    </div>
  );
};

export default SectionJob;
