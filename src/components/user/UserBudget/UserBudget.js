import React from "react";
import "./UserBudget.css";

const UserBudget = () => {
  return (
    <div className="UserBudget">
      <div className="widget-main">
        <div className="title">
          <h4>Budget</h4>
        </div>
        <div className="content">
            
          {/* Budget infomation */}
          <h4>$125 - $180</h4>
          <p class="mb-0">Hourly Rate</p>

          {/* User info */}
          <ul className="user-info">
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Location
              </h6>
              <h5>London, UK</h5>
            </li>
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Years of Experience
              </h6>
              <h5>5 Years</h5>
            </li>
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Delivery Time
              </h6>
              <h5>3-5 Days</h5>
            </li>
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Language Level
              </h6>
              <h5>Basic</h5>
            </li>
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Phone
              </h6>
              <h5>+91 9988776655</h5>
            </li>
            <li className="user-row">
              <h6>
                <i class="bi bi-geo-alt"></i>Mail
              </h6>
              <h5>info@example.com</h5>
            </li>
          </ul>

          {/* Send invite button*/}
          <button className="send-invite">Send invite</button>
        </div>
      </div>
    </div>
  );
};

export default UserBudget;
