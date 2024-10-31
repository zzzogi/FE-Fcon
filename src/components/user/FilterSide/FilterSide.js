import React, { useState } from "react";
import "./FilterSide.css";
import CheckDropMenu from "../CheckDropMenu/CheckDropMenu";

const FilterSide = ({ onFilterChange }) => {
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const locations = [
    { label: "Hải Phòng" },
    { label: "Hồ Chí Minh" },
    { label: "Thủ Đức" },
    { label: "Hòa Lạc" },
    { label: "Đà Nẵng" },
    { label: "Japan" },
    { label: "Hà Nội" },
  ];

  const handleLocationChange = (selected) => {
    setSelectedLocations(selected);
    onFilterChange({
      locations: selected,
      priceRange: { minPrice, maxPrice },
    });
  };

  const handlePriceChange = () => {
    onFilterChange({
      locations: selectedLocations,
      priceRange: { minPrice, maxPrice },
    });
  };

  const resetFilters = () => {
    setSelectedLocations([]);
    setMinPrice(0);
    setMaxPrice(10000);
    onFilterChange({ locations: [], priceRange: { minPrice: 0, maxPrice: 10000000 } });
  };

  return (
    <div className="FilterSide">
      <div className="filter-container">
        <div className="filter-title">
          <h4>Filters</h4>
          <button className="reset-filters" onClick={resetFilters}>Reset</button>
        </div>

        <CheckDropMenu
          title="Location"
          options={locations}
          selectedOptions={selectedLocations}
          onChange={handleLocationChange}
        />

        <div className="price-filter">
          <h5>Price Range</h5>
          <div className="price-inputs">
            <input
              type="number"
              placeholder="Min"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
              onBlur={handlePriceChange}
            />
            <input
              type="number"
              placeholder="Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              onBlur={handlePriceChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSide;
