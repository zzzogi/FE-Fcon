import React from "react";
import "./SectionAboutMission.css";
import Img1 from "../../../assets/images/blog/aboutus.jpg";
import Img2 from "../../../assets/images/blog/aboutus1.jpg";
const SectionAboutMission = () => {
  return (
    <div className="SectionAboutMission">
      <div className="content">
        <h2>About We’re on a mission to empowering Jobs worldwide.</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est modi,
          saepe hic esse maxime quasi, sapiente ex debitis quis dolorum unde,
          neque quibusdam eveniet nobis enim porro repudiandae nesciunt quidem.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
          delectus soluta adipisci beatae ullam quisquam, quia recusandae rem
          assumenda, praesentium porro sequi eaque doloremque tenetur incidunt
          officiis explicabo optio perferendis.
        </p>
      </div>
      <div className="images">
        <div className="img-item">
          <img src={Img1} alt="image-item" />
        </div>
        <div className="img-item">
          <img src={Img2} alt="image-item" />
        </div>
      </div>
    </div>
  );
};

export default SectionAboutMission;
