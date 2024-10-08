import React from "react";
import "./FilterSide.css";
import CheckDropMenu from "../CheckDropMenu/CheckDropMenu";

const FilterSide = () => {
  const option1 = [
    {
      isChecked: false,
      value: {},
      label: "US",
    },
    {
      isChecked: false,
      value: {},
      label: "UK",
    },
    {
      isChecked: false,
      value: {},
      label: "VI",
    },
    {
      isChecked: false,
      value: {},
      label: "FR",
    },
    {
      isChecked: false,
      value: {},
      label: "DE",
    },
    {
      isChecked: false,
      value: {},
      label: "JP",
    },
    {
      isChecked: false,
      value: {},
      label: "CA",
    },
  ];
  const option2 = [
    {
      isChecked: false,
      value: {},
      label: "After effects",
    },
    {
      isChecked: false,
      value: {},
      label: "Android Developer",
    },
    {
      isChecked: false,
      value: {},
      label: "Backend Developer",
    },
    {
      isChecked: false,
      value: {},
      label: "Frontend Developer",
    },
    {
      isChecked: false,
      value: {},
      label: "UI/UX Designer",
    },
  ];

  const option3 = [
    {
      isChecked: false,
      value: {},
      label: "Developer",
    },
    {
      isChecked: false,
      value: {},
      label: "Designer",
    },
    {
      isChecked: false,
      value: {},
      label: "Tester",
    },
  ];

  return (
    <div className="FilterSide">
      <div className="filter-container">
        <div className="filter-title">
          <h4 className="card-title ">Search Filter</h4>
        </div>
        <div className="filter-content">
          <CheckDropMenu title="Location" options={option1} max={5} />
          <CheckDropMenu title="Skills" options={option2} max={4} />
          <CheckDropMenu title="Categories" options={option3} />
          <CheckDropMenu title="Freelancer Type" options={option1} />
          <CheckDropMenu title="Languages" options={option1} />
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
