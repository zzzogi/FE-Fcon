import React, { useState, useEffect } from "react";
import "./CheckDropMenu.css"; // Import the CSS file for styling

const CheckDropMenu = ({ title, options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (label) => {
    let updatedSelections = [...selectedOptions];
    if (updatedSelections.includes(label)) {
      updatedSelections = updatedSelections.filter((option) => option !== label);
    } else {
      updatedSelections.push(label);
    }
    onChange(updatedSelections); // Send selected options back to parent
  };

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.check-drop-menu')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="check-drop-menu">
      <h5 onClick={() => setIsOpen(!isOpen)} className="dropdown-title">
        {title}
      </h5>
      {isOpen && (
        <ul className="dropdown-list">
          {options.map((option, index) => (
            <li key={index} className="dropdown-item">
              <input
                type="checkbox"
                id={`checkbox-${index}`}
                checked={selectedOptions.includes(option.label)}
                onChange={() => handleCheckboxChange(option.label)}
              />
              <label htmlFor={`checkbox-${index}`}>{option.label}</label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CheckDropMenu;
