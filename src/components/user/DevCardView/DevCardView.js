import React from "react"
import "./DevCardView.css"
import { useNavigate } from "react-router-dom";


const DevCardView = ({ infomation }) => {


  const navigate = useNavigate();
  const onNavRoute = (endpoint) => {
    navigate(endpoint)
  }

  return (
    <div className="DevCardView">
      <div className="dev-card-container">
        <div className="box-color"></div>
        <div className="avatar">
          <div className="status">
            <i className="bi bi-check"></i>
          </div>
          <img src={infomation.avatar} alt="avatar" />
        </div>
        <div className="info">
          <p>{infomation.name}</p>
          <p>{infomation.position}</p>
          <p>
            Ho Chi Minh, Viet Nam
          </p>
        </div>
        <div className="voting">
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill"></i>
          <i className="bi bi-star-fill grey"></i>
        </div>
        <div className="tags">
          {infomation.tags.map((tag) => {
            return <div className="tag" key={infomation.name + tag}>{tag}</div>;
          })}
        </div>
        <div className="salary">
          <h4>{infomation.salary}</h4>
        </div>
        <button className="invite">Invite</button>
        <button className="view-profile"  onClick={() => onNavRoute("profile/freelancer/[id_or_slug]")}>View profile</button>
      </div>
    </div>
  );
};

export default DevCardView;
