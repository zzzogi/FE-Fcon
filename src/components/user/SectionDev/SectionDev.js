import React from "react";
import "./SectionDev.css";
import CustomTitle from "../CustomTitle/CustomTitle";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Ava1 from "../../../assets/images/user/avatar-1.jpg";
import Ava2 from "../../../assets/images/user/avatar-2.jpg";
import Ava3 from "../../../assets/images/user/avatar-3.jpg";
import Ava4 from "../../../assets/images/user/avatar-4.jpg";
import Ava5 from "../../../assets/images/user/avatar-5.jpg";
const DevCard = ({ infomation }) => {
  return (
    <div className="DevCard">
      <div className="dev-card-container">
        <div className="box-color"></div>
        <div className="avatar">
          <div className="status">
            <i class="bi bi-check"></i>
          </div>
          <img src={infomation.avatar} alt="avatar" />
        </div>
        <div className="info">
          <p>{infomation.name}</p>
          <p>{infomation.position}</p>
          <p>
            <i class="bi bi-geo-alt"></i>Ho Chi Minh, Viet Nam
          </p>
        </div>
        <div className="voting">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill grey"></i>
        </div>
        <div className="tags">
          {infomation.tags.map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
        <div className="salary">
          <h4>{infomation.salary}</h4>
        </div>
        <button className="view-profile">View profile</button>
      </div>
    </div>
  );
};

const SectionDev = () => {
  const options = {
    loop: true,
    smartSpeed: 1050,
    dots: false,
    margin: 24,
    items: 4,
    // navElement: "i class='bi bi-chevron-right'"
    navText: [
      "<i class='bi bi-chevron-left'></i>",
      "<i class='bi bi-chevron-right'></i>",
    ],
  };

  const developers = [
    {
      name: "Richarh hendrick",
      position: "Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava1,
    },
    {
      name: "Erlich bachman",
      position: "Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava2,
    },
    {
      name: "Gilfloy",
      position: "Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava3,
    },
    {
      name: "Dinesh",
      position: "Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava4,
    },
    {
      name: "Richarh hendrick",
      position: "Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
  ];

  return (
    <div className="SectionDev">
      <div className="section-title">
        <CustomTitle
          title="Most Hired Developers"
          desc="Work with talented people at the most affordable price"
          position="left"
        />
      </div>
      <div className="section-content">
        <div className="dev-list">
          <div className="dev-list-inner">
            <OwlCarousel
              className="owl-theme owl-height"
              loop
              margin={10}
              nav
              {...options}
            >
              {developers.map((dev) => {
                return (
                  <div class="item">
                    <DevCard infomation={dev} />
                  </div>
                );
              })}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDev;
