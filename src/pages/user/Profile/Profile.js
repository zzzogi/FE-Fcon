import React from "react";
import "./Profile.css";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import UserBudget from "../../../components/user/UserBudget/UserBudget";
import UserSkills from "../../../components/user/UserSkills/UserSkills";
import UserLocation from "../../../components/user/UserLocation/UserLocation";

import Avatar from "../../../assets/images/img-04.jpg";
import ProImg1 from "../../../assets/images/icon/computer-line.svg";
import ProImg2 from "../../../assets/images/icon/time-line.svg";
import ProImg3 from "../../../assets/images/icon/time-line.svg";
import ProImg4 from "../../../assets/images/icon/user-heart-line.svg";
import ProImg5 from "../../../assets/images/icon/translate-2.svg";
import ProImg6 from "../../../assets/images/icon/translate.svg";

import ExpImg1 from "../../../assets/images/icon/expereience.png";
import EduImg1 from "../../../assets/images/icon/report.png";

import UserAva1 from "../../../assets/images/user/avatar-1.jpg";
import UserAva2 from "../../../assets/images/user/avatar-2.jpg";

import { useParams } from 'react-router-dom';


// [ Education - Experience ] Card Component
const ECard = ({ data }) => {
  return (
    <div className="ECard">
      <div className="e-image">
        <img src={data.icon} alt="icon" />
      </div>
      <div className="e-content">
        <h5 className="title">
          {data.title}
          <span className="time">{data.date}</span>
        </h5>
        <span className="sub-title">{data.sub}</span>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

// [ Review ] Card Component
const RCard = ({ data }) => {
  return (
    <div className="RCard">
      <div className="avatar">
        <img src={data.avatar} alt="avatar"/>
      </div>
      <div className="info">
        <div className="title">
          <div className="title-top">
            <h5>{data.name}</h5>
            <ul class="d-flex">
              <li>
                <div class="proposals-user-review">
                  <span>
                    <i class="bi bi-star-fill"></i>
                    {data.voting}
                  </span>
                </div>
              </li>
              <li className="line"></li>
              <li>
                <div class="proposals-user-review">
                  <span>
                    <i class="feather-calendar"></i>1 min ago
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div class="pricing">
            <h4>{data.pricing}</h4>
            <span>Price : Fixed </span>
          </div>
        </div>

        <div className="desc">
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

const Profile = () => {
  // Get Slug from router
  const { userType } = useParams();


  // Data render
  const experiences = [
    {
      icon: ExpImg1,
      title: "Team Leader",
      date: "2017 - 2023",
      sub: "UI UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      icon: ExpImg1,
      title: "Senior UI UX Designer",
      date: "2019 - 2021",
      sub: "UI UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      icon: ExpImg1,
      title: "Junior UI UX Designer",
      date: "2016 - 2019",
      sub: "UI UX Designer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  const educations = [
    {
      icon: EduImg1,
      title: "Master Degree",
      date: "2013 - 2016",
      sub: "Arizona State University",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
    {
      icon: EduImg1,
      title: "Bachelor Degree",
      date: "2010 - 2013",
      sub: "Arizona State University",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    },
  ];

  const reviews = [
    {
      avatar: UserAva1,
      name: "Theresa Phillips",
      voting: "5.0 (346 Reviews)",
      pricing: "$40-$500",
      desc: "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
    },
    {
      avatar: UserAva2,
      name: "Aaron Storey",
      voting: "5.0 (346 Reviews)",
      pricing: "$20-$350",
      desc: "I've been buying and selling on kofejob Marketplace for the past two years, and it's been a game-changer for me. The platform is user-friendly, and I've had great success selling my handmade crafts. Plus, the customer support team is always there to help if I have any questions or issues.",
    },
  ];

  return (
    <div className="Profile">
      {/* Bread crumb and current route */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title={`${userType} Detail`} page={`${userType} detail`} />
        </div>
      </div>

      <div className="section-user-detail">
        <div className="container">
          <div className="main-flex">
            {/* Main content */}
            <div className="user-content">
              {/* User infomation */}
              <div className="user-info">
                <div className="avatar">
                  <img src={Avatar} alt="avatar" />
                </div>
                <div className="info">
                  <h4>Michael Stewart</h4>
                  <p>UI UX Designer</p>
                </div>
              </div>
              {/* User reviews */}
              <div className="user-reviews">
                <ul>
                  <li>
                    <i class="bi bi-geo-alt"></i>Los Angels
                  </li>
                  <li className="line"></li>
                  <li>
                    <i class="bi bi-calendar"></i>22 September 2023
                  </li>
                  <li className="line"></li>
                  <li>
                    <i class="bi bi-star"></i>5.0, 245 Reviews
                  </li>
                </ul>
              </div>
              {/* User proposal */}
              <div className="user-proposal">
                <ul>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg1} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Recommended</span>
                      <p class="mb-0">89%</p>
                    </div>
                  </li>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg2} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Completed Projects</span>
                      <p class="mb-0">220</p>
                    </div>
                  </li>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg3} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Ongoing Projects</span>
                      <p class="mb-0">10</p>
                    </div>
                  </li>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg4} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Feedbacks</span>
                      <p class="mb-0">78</p>
                    </div>
                  </li>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg5} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Rehired</span>
                      <p class="mb-0">Rehired</p>
                    </div>
                  </li>
                  <li>
                    <div class="proposal-detail-img">
                      <img src={ProImg6} alt="icons" />
                    </div>
                    <div class="proposal-detail text-capitalize">
                      <span class=" d-block">Response Times</span>
                      <p class="mb-0">1 Hour</p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* User description */}
              <div className="user-description">
                <h4 class="title">Description</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
              {/* User experience */}
              <div className="user-experience">
                <h4 class="title">Experience</h4>
                <div className="experience-list">
                  {experiences.map((exp) => {
                    return (
                      <div className="e-item">
                        <ECard data={exp} />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* User education */}
              <div className="user-education">
                <h4 class="title">Education</h4>
                <div className="education-list">
                  {educations.map((edu) => {
                    return (
                      <div className="e-item">
                        <ECard data={edu} />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Orther user reviews */}
              <div className="orther-reviews">
                <h4 class="title">Review (5)</h4>
                <div className="review-list">
                  {reviews.map((edu) => {
                    return (
                      <div className="review-item">
                        <RCard data={edu} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Infomation sidebar */}
            <div className="filter-side">
              <div className="filter-sticky">
                {/* User Budget */}
                <div className="user-budget">
                  <UserBudget />
                </div>
                {/* User Skills */}
                <div className="user-skills">
                  <UserSkills />
                </div>
                {/* User Location */}
                <div className="user-location">
                  <UserLocation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
