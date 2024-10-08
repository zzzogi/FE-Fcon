import React, { useState } from "react";
import "./FilterSide.css";
import CheckDropMenu from "../CheckDropMenu/CheckDropMenu";

const FilterSide = ({ onFilterChange }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const option1 = [
    { isChecked: false, label: "US" },
    { isChecked: false, label: "UK" },
    { isChecked: false, label: "Ho Chi Minh" },
    { isChecked: false, label: "Vietnam" },
    { isChecked: false, label: "DE" },
    { isChecked: false, label: "JP" },
    { isChecked: false, label: "CA" },
  ];

  const option2 = [
    { isChecked: false, label: "HTML" },
    { isChecked: false, label: "CSS" },
    { isChecked: false, label: "Copywriting" },
    { isChecked: false, label: "Node.js" },
    { isChecked: false, label: "Android Studio" },
    { isChecked: false, label: "PostgreSQL" },
    { isChecked: false, label: "Data Visualization" },
  ];

  const option3 = [
    { isChecked: false, label: "Developer" },
    { isChecked: false, label: "Designer" },
    { isChecked: false, label: "Tester" },
  ];

  const handleLocationChange = (selectedOptions) => {
    setSelectedLocations(selectedOptions);
    onFilterChange({
      locations: selectedOptions,
      skills: selectedSkills,
      categories: selectedCategories,
    });
  };

  const handleSkillChange = (selectedOptions) => {
    setSelectedSkills(selectedOptions);
    onFilterChange({
      locations: selectedLocations,
      skills: selectedOptions,
      categories: selectedCategories,
    });
  };

  const handleCategoryChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
    onFilterChange({
      locations: selectedLocations,
      skills: selectedSkills,
      categories: selectedOptions,
    });
  };

  return (
    <div className="FilterSide">
      <div className="filter-container">
        <div className="filter-title">
          <h4 className="card-title">Search Filter</h4>
        </div>
        <div className="filter-content">
          <CheckDropMenu
            title="Location"
            options={option1}
            onChange={handleLocationChange}
          />
          <CheckDropMenu
            title="Skills"
            options={option2}
            onChange={handleSkillChange}
          />
          <CheckDropMenu
            title="Categories"
            options={option3}
            onChange={handleCategoryChange}
          />
          {/* You can add more CheckDropMenu for other filters */}
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
