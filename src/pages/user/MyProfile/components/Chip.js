import React from "react";
import "../layout.css";
import { data } from "jquery";

const ChipList = ({ title, chips }) => {
  const info = chips || {};
  const reviews = info.reviews || []; 
  return (
    <div>
      <div class="company-detail-block company-description">
        <h4 class="company-detail-title">{title}</h4>
        <div class="tags">
        <h2>info.skills</h2>          
          {/* {chips.map((chip) => {
            return (
              <button
                onClick={console.log("hello world")}
                style={{ border: "none", padding: 0 }}
              >
                <span class="badge badge-design">{chip.title}</span>
              </button>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ChipList;
