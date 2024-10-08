import React, { useState } from "react";
import "./UserSkills.css";

const UserSkills = ({ max = 9 }) => {
  const skills = [
    "After Effects",
    "Illustrator",
    "HTML",
    "Whiteboard",
    "Software ",
    "HTML5 ",
    "Design Writing",
    "Whiteboard",
    "Web design",
  ];

  const [isView, setIsView] = useState(false);

  const onView = () => {
    setIsView((isView) => !isView);
  };

  return (
    <div className="UserSkills">
      <div className="widget-main">
        <div className="title">
          <h4>Skills</h4>
        </div>
        <div className="content">
          <div className="tag-list">
            {skills.map((skill, index) => {
              if (!isView) {
                if (index <= max - 1)
                  return <div className="tag-item">{skill}</div>;
                else return <></>
              } else {
                return <div className="tag-item">{skill}</div>;
              }
            })}
            <div className="more" onClick={onView}>
              {isView ? "hidden" : "view all"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSkills;
