import React, { useState } from "react";
import "./FilterSide.css";
import CheckDropMenu from "../CheckDropMenu/CheckDropMenu";

const FilterSide = ({ onFilterChange }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const locations = [
    { label: "US" },
    { label: "UK" },
    { label: "Ho Chi Minh" },
    { label: "Vietnam" },
    { label: "DE" },
    { label: "JP" },
    { label: "CA" },
  ];

  const skills = [
    { label: "HTML" },
    { label: "CSS" },
    { label: "Copywriting" },
    { label: "Node.js" },
    { label: "Android Studio" },
    { label: "PostgreSQL" },
    { label: "Data Visualization" },
  ];

  const categories = [
    { label: "Web Developer Needed" },
    { label: "Mobile App Developer" },
    { label: "Content Writer" },
    { label: "Data Analyst" },
    { label: "Graphic Designer" },
    { label: "Backend Developer" },
    { label: "UI/UX Designer" },
    { label: "Full Stack Developer" },
    { label: "Business Analyst" },
    { label: "Marketing Specialist" },
  ];

  const handleLocationChange = (selected) => {
    setSelectedLocations(selected);
    onFilterChange({
      locations: selected,
      skills: selectedSkills,
      categories: selectedCategories,
    });
  };

  const handleSkillChange = (selected) => {
    setSelectedSkills(selected);
    onFilterChange({
      locations: selectedLocations,
      skills: selected,
      categories: selectedCategories,
    });
  };

  const handleCategoryChange = (selected) => {
    setSelectedCategories(selected);
    onFilterChange({
      locations: selectedLocations,
      skills: selectedSkills,
      categories: selected,
    });
  };

  const resetFilters = () => {
    setSelectedLocations([]);
    setSelectedSkills([]);
    setSelectedCategories([]);
    onFilterChange({ locations: [], skills: [], categories: [] });
  };

  return (
    <div className="FilterSide">
      <div className="filter-container">
        <div className="filter-title">
          <h4>Filters</h4>
          <button className="reset-filters" onClick={resetFilters}>Reset Filters</button>
        </div>
        <CheckDropMenu
          title="Location"
          options={locations}
          selectedOptions={selectedLocations}
          onChange={handleLocationChange}
        />
        <CheckDropMenu
          title="Skills"
          options={skills}
          selectedOptions={selectedSkills}
          onChange={handleSkillChange}
        />
        <CheckDropMenu
          title="Categories"
          options={categories}
          selectedOptions={selectedCategories}
          onChange={handleCategoryChange}
        />
      </div>
    </div>
  );
};

export default FilterSide;