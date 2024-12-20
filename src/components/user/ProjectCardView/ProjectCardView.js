import React from "react";
import "./ProjectCardView.css";
import { useNavigate } from "react-router-dom";
import Avatar1 from "../../../assets/images/avatar/avatar-1.jpg";

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
          <img src={infomation?.avatar || Avatar1} alt="avatar" />
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
          {infomation.tags.slice(0, 3).map((tag) => (
            <div className="tag" key={infomation.name + tag}>
              {tag}
            </div>
          ))}
          {infomation.tags.length > 3 && (
            <div className="tag">+{infomation.tags.length - 3}</div>
          )}
        </div>

        {/* <div className="salary">
          <h4>{infomation.salary} VND</h4>
        </div> */}
        <div className="left">
          <span>{infomation.lastest}</span>
        </div>
        <button
          className="view-profile"
          onClick={() => navigate(`/projects/${infomation.id}`)} // Navigates to the project details page
          style={{
            marginTop: 12,
          }}
        >
          View Post
        </button>
      </div>
    </div>
  );
};

export default ProjectCardView;
