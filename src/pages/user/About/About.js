import React from "react";
import "./About.css";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import SectionAboutMission from "../../../components/user/SectionAboutMission/SectionAboutMission";
import SectionAboutProject from "../../../components/user/SectionAboutProject/SectionAboutProject";
import SectionAboutReview from "../../../components/user/SectionAboutReview/SectionAboutReview";

const About = () => {
  return (
    <div className="About">
      {/* Bread crumb and current route */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="About us" page="About Us" />
        </div>
      </div>

      {/* Section Banner */}
      <div className="section-about-mission">
        <div className="container">
          <SectionAboutMission />
        </div>
      </div>


      {/* Section About Project */}
      <div className="section-about-project">
        <div className="container">
          <SectionAboutProject />
        </div>
      </div>

      {/* Section About Review */}
      <div className="section-about-review">
        <div className="container">
          <SectionAboutReview />
        </div>
      </div>
    </div>
  );
};

export default About;
