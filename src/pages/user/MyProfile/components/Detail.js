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
import "../layout.css";

const Detail = ({ userData, page = "developers" }) => {
  return (
    <div>
      <div class="company-detail-block">
        <div class="company-detail">
          <div class="company-detail-image">
            <img src={userData.image} class="img-fluid" alt="logo" />
          </div>
          <div class="company-title">
            {page === "employers" || page === "project-detail" ? (
              <>
                <p>{userData.name}</p>
                <h4>{userData.description}</h4>
              </>
            ) : (
              <>
                <h4>{userData.name}</h4>
                <p>{userData.description}</p>
              </>
            )}
          </div>
        </div>
        <div class="company-address">
          <ul>
            <li>
              <img src={MapPin} alt="icons" class="icon" />
              {userData.info.address}
            </li>
            <li>
              <img src={Calendar} alt="icons" class="icon" />
              {userData.info.createdDate}
            </li>
            {page === "employers" || page === "project-detail" ? (
              <>
                <li>
                  <img src={Eye} alt="icons" class="icon" />
                  {userData.info.numsOfViews + " reviews"}
                </li>
                <li>
                  <img src={Pen} alt="icons" class="icon" />
                  {userData.info.numsOfProposals + " Proposal"}
                </li>
              </>
            ) : (
              <>
                <li>
                  <img src={Star} alt="icons" class="icon" />
                  {userData.info.rating + " "},
                  {userData.info.numsOfReviews + " reviews"}
                </li>
              </>
            )}
          </ul>
        </div>
        <div class="project-proposal-detail">
          <ul>
            {page === "employers" || page === "project-detail" ? (
              <>
                <li>
                  <div class="proposal-detail-img">
                    <img src={ComputerLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Freelancer Type</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.freelancer_type}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TimeLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Project Type</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.project_type}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TimeLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Project Duration</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.project_duration}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={UserHeartLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Experience</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.experience}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TranslateTwo} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Languages</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.languages.join(", ")}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TranslateOne} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Language Fluency</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.language_fluency}
                    </p>
                  </div>
                </li>
              </>
            ) : (
              <>
                <li>
                  <div class="proposal-detail-img">
                    <img src={ComputerLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Recommended</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.recommended}%
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TimeLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Completed Projects</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.completed_project}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TimeLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Ongoing Projects</span>
                    <p style={{ marginBottom: 0 }}>
                      {userData.info.ongoing_project}
                    </p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={UserHeartLine} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Feedbacks</span>
                    <p style={{ marginBottom: 0 }}>{userData.info.feedbacks}</p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TranslateTwo} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Rehired</span>
                    <p style={{ marginBottom: 0 }}>{userData.info.rehied}</p>
                  </div>
                </li>
                <li>
                  <div class="proposal-detail-img">
                    <img src={TranslateOne} alt="icons" />
                  </div>
                  <div class="proposal-detail text-capitalize">
                    <span style={{ display: "block" }}>Response Times</span>
                    <p style={{ marginBottom: 0 }}>
                      ~{convertMinsToHrsMins(userData.info.response_time)}
                    </p>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <div class="company-detail-block company-description">
        <h4 class="company-detail-title">Description</h4>
        <p>{userData.about}</p>
      </div>
    </div>
  );
};

export default Detail;
