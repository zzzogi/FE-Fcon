import React from "react";
import "./Home.css";
import Banner from "../../../components/user/Banner/Banner";
import SectionCategory from "../../../components/user/SectionCategory/SectionCategory";

import SectionReview from "../../../components/user/SectionReview/SectionReview";
import SectionEmployer from "../../../components/user/SectionEmployer/SectionEmployer";
import SectionProject from "../../../components/user/SectionProject/SectionProject";
import SectionDev from "../../../components/user/SectionDev/SectionDev";
import SectionSubscribe from "../../../components/user/SectionSubscribe/SectionSubscribe";

import BgImage from "../../../assets/images/bg/bg3.png"
import SectionBlog from "../../../components/user/SectionBlog/SectionBlog";
import SectionJob from "../../../components/user/SectionJob/SectionJob";
const Home = () => {
  return (
    <div className="Home">
      {/* Section Banner */}
      <div className="section-banner">
        <div className="container">
          <Banner />
        </div>
      </div>

      {/* Section Categories */}
      <div className="section-categories">
        <div className="container">
          <SectionCategory />
        </div>
      </div>

      {/* Section Projects */}
      <div className="section-employer">
        <div className="container">
          <SectionEmployer />
        </div>
      </div>

      {/* Section Review */}
      <div className="section-review">
        <div className="container">
          <SectionReview />
        </div>
      </div>

      {/* Section Projects */}
      <div className="section-project">
        <div className="container">
          <SectionProject/>
        </div>
      </div>

      {/* Section Developer */}
      <div className="section-developer">
        <div className="container">
            <SectionDev/>
        </div>
      </div>

      {/* Section Subcribe */}
      <div className="section-subscribe">
        <div className="container">
            <SectionSubscribe/>
        </div>
        <div className="bg-img">
          <img src={BgImage} alt="img-bg-subscribe"/>
        </div>
      </div>

      {/* Section Top Review - Removed*/}
      {/* Section Partner - Removed*/}

      {/* Section Blog */}
      <div className="section-blog">
        <div className="container">
          <SectionBlog />
        </div>
      </div>

       {/* Section Job Register */}
       <div className="section-job">
        <div className="container">
          <SectionJob />
        </div>
      </div>
    </div>
  );
};

export default Home;
