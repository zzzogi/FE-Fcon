import React from "react";
import "./ProjectCardView.css";
import { useNavigate } from "react-router-dom";

const ProjectCardView = ({ infomation }) => {
  const navigate = useNavigate();

  return (
    <div className="ProjectCardView">
      <div className="dev-card-container">
        <div className="box-color"></div>
        <div className="avatar">
          <div className="status">
            <i className="bi bi-check"></i>
          </div>
          <img src={infomation.avatar} alt="avatar" />
        </div>
        <div className="info">
          <p hidden>{infomation.id}</p>
          <p>{infomation.name}</p>
          <p>{infomation.position}</p>         
        </div>
        <div className="voting">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill grey"></i>
        </div>
        <div className="tags">
          {infomation.tags.map((tag) => (
            <div className="tag" key={infomation.name + tag}>
              {tag}
            </div>
          ))}
        </div>
        <div className="salary">
          <h4>{infomation.salary}</h4>
        </div>
        <div className="left">
          <span>{infomation.lastest}</span>
        </div>
        <button
          className="view-profile"
          onClick={() => navigate(`/projects/${infomation.id}`)} // Navigates to the project details page
        >
          View project
        </button>
      </div>
    </div>
  );
};

export default ProjectCardView;
