import React from "react";
import { convertMinsToHrsMins } from "../../../../utils/commonFunc";
import MapPin from "../../../../assets/images/icon/map-pin.svg";
import Star from "../../../../assets/images/icon/star.svg";
import Calendar from "../../../../assets/images/icon/calendar.svg";
import Eye from "../../../../assets/images/icon/eye.svg";
import Pen from "../../../../assets/images/icon/edit-2.svg";
import ComputerLine from "../../../../assets/images/icon/computer-line.svg";
import TimeLine from "../../../../assets/images/icon/time-line.svg";
import UserHeartLine from "../../../../assets/images/icon/user-heart-line.svg";
import TranslateTwo from "../../../../assets/images/icon/translate-2.svg";
import TranslateOne from "../../../../assets/images/icon/translate.svg";
import PlaceholderImage from "../../../../assets/images/Fcon.jpg";
import "../layout.css";

const Detail = ({ data }) => {
  const info = data || {};
  const reviews = info.reviews || []; // Ensure reviews is always an array

  return (
    <div>
      <div className="company-detail-block">
        <div className="company-detail">
          <div className="company-detail-image">
            <img
              src={info.imgUrl || PlaceholderImage}
              className="img-fluid"
              alt="project"
            />
          </div>
          <div className="company-title">
            <h4>{info.title || "No Title Provided"}</h4>
            {/* <p>{info.description || "No Description Provided"}</p> */}
          </div>
        </div>
        <div className="company-address">
          <ul>
            <li>
              <img src={MapPin} alt="icons" className="icon" />
              {info?.position || "Somewhere far away"}{" "}
              {/* Placeholder since location is missing in the API */}
            </li>
            <li>
              <img src={Calendar} alt="icons" className="icon" />
              {new Date(info.createdAt).toLocaleDateString() ||
                "Date not available"}
            </li>
            <li>
              <img src={Pen} alt="icons" className="icon" />
              {info.status || "Status not available"}
            </li>
            <li>
              <img src={Eye} alt="icons" className="icon" />
              {reviews.length + " reviews"} {/* Safely accessing length */}
            </li>
          </ul>
        </div>
        <div className="project-proposal-detail">
          <ul>
            <li>
              <div className="proposal-detail-img">
                <img src={ComputerLine} alt="icons" />
              </div>
              <div className="proposal-detail text-capitalize">
                <span style={{ display: "block" }}>Skills Required</span>
                <p style={{ marginBottom: 0 }}>
                  {info.skills || "Not specified"}
                </p>
              </div>
            </li>
            <li>
              <div className="proposal-detail-img">
                <img src={TimeLine} alt="icons" />
              </div>
              <div className="proposal-detail text-capitalize">
                <span style={{ display: "block" }}>Budget</span>
                <p style={{ marginBottom: 0 }}>
                  {info.budgetOrSalary || "Not specified"} VND
                </p>
              </div>
            </li>
            {/* <li>
              <div className="proposal-detail-img">
                <img src={UserHeartLine} alt="icons" />
              </div>
              <div className="proposal-detail text-capitalize">
                <span style={{ display: "block" }}>Post Type</span>
                <p style={{ marginBottom: 0 }}>
                  {info.postType || "Not specified"}
                </p>
              </div>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="company-detail-block company-description">
        <h4 className="company-detail-title">Description</h4>
        <p>{info.description || "No additional description available"}</p>
      </div>
    </div>
  );
};

export default Detail;
