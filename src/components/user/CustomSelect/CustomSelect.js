// CustomSelect.js
import React, { useState } from "react";
import "./CustomSelect.css"; // Tạo file CSS để tùy chỉnh

const CustomSelect = ({ options, placeholder }) => {
  // State quản lý giá trị được chọn và trạng thái hiển thị danh sách
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  // Hàm xử lý khi chọn một mục
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Đóng danh sách sau khi chọn
  };

  return (
    <div className="custom-select-container">
      {/* Hiển thị giá trị đã chọn hoặc placeholder */}
      <div className="custom-select-header" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption ? selectedOption.label : placeholder}
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <i className="bi bi-chevron-down"></i>
        </span>
      </div>

      {/* Hiển thị danh sách tùy chọn */}
      {isOpen && (
        <div className="custom-select-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="custom-select-option"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
