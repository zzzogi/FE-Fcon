import React, { useState } from "react";
import "./CheckDropMenu.css";

const CheckDropMenu = ({ title = "", max = 4, options = [] }) => {
  const [isDetailed, setIsDetailed] = useState(true);
  const [isSummary, setIsSummary] = useState(false);

  // Handle menu drop
  const onDropMenu = () => {
    setIsDetailed((isDetailed) => (isDetailed = !isDetailed));
  };

  // Handle sub-menu drop
  const onSubDropMenu = () => {
    setIsSummary((isSummary) => (isSummary = !isSummary));
  };

  return (
    <div className="CheckDropMenu">
      <div className="title" onClick={onDropMenu}>
        <p>{title}</p>
        <i className="bi bi-chevron-down"></i>
      </div>
      <div className="drop-menu">
        <div
          className="layer-1"
          style={
            isDetailed
              ? {
                  maxHeight:
                    35 * (isSummary ? options.length + 1 : (max < options.length) ? (max + 1) : max) + "px",
                }
              : { maxHeight: 0 + "px" }
          }
        >
          <div
            className="layer-2"
            style={{
              maxHeight: isSummary
                ? 35 * (options.length + 1) + "px"
                : ((max < options.length) ? max : (max + 1)) * 35 + "px",
            }}
            data-summary={isSummary}
          >
            <ul className="check-list">
              {options.map((opt) => {
                return (
                  <li key={opt}>
                    <input type="checkbox" className="checkmark" />
                    {opt.label}
                  </li>
                );
              })}
            </ul>
            {max < options.length && (
              <div className="toggle-detail" onClick={onSubDropMenu}>
                <i class="bi bi-plus"></i>show more
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckDropMenu;
