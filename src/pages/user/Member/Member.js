import React from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "./Member.css";
import Ava1 from "../../../assets/images/user/avatar-1.jpg";
import Ava2 from "../../../assets/images/user/avatar-2.jpg";
import Ava3 from "../../../assets/images/user/avatar-3.jpg";
import Ava4 from "../../../assets/images/user/avatar-4.jpg";
import Ava5 from "../../../assets/images/user/avatar-5.jpg";
import DevCardView from "../../../components/user/DevCardView/DevCardView";
import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
import FilterSide from "../../../components/user/FilterSide/FilterSide";

const Member = () => {
  const Members = [
    {
      name: "Richard hendrick",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava1,
    },
    {
      name: "Erlich bachman",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava2,
    },
    {
      name: "Martin Starr",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava3,
    },
    {
      name: "Dinesh Chugtai ",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava4,
    },
    {
      name: "Bill gate",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Member",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
  ];

  const options = [
    { value: "option0", label: "All" },
    { value: "option1", label: "Popular" },
    { value: "option2", label: "Relevance" },
    { value: "option3", label: "Rating" },
    { value: "option4", label: "Lastest" },
    { value: "option5", label: "Free" },
  ];

  /* NAVIGATE TO PAGE  ------------------- */

  return (
    <div className="Member">
      {/* Bread crumb and current route */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Freelancer Grid" page="Member" />
        </div>
      </div>

      <div className="section-dev-list">
        <div className="container">
          <div className="main-flex">
            {/* Filter sidebar */}
            <div className="filter-side">
              <FilterSide />
            </div>
            <div className="dev-list">
              {/* Filter-top */}
              <div className="dev-list-filter">
                <span>Found 9 Results</span>
                <CustomSelect options={options} placeholder="Sort By" />
              </div>

              {/* List-render */}
              <div className="dev-list-inner">
                {Members.map((dev, index) => {
                  return (
                    <div className="dev-card" key={dev.name + "_" + index}>
                      <DevCardView infomation={dev} />
                    </div>
                  );
                })}
              </div>

              {/* Navigator */}
              <div className="dev-list-navigator">
                <div className="arrow arrow-left">
                  <i class="bi bi-chevron-left"></i>
                </div>
                <div className="number-page page-actived">1</div>
                <div className="number-page">2</div>
                <div className="number-page">3</div>
                <div className="number-page dot-summary">...</div>
                <div className="number-page">20</div>
                <div className="arrow arrow-right">
                  <i class="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Member;
