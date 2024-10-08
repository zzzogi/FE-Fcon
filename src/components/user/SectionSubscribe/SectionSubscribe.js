import React from "react";
import CustomTitle from "../CustomTitle/CustomTitle";
import "./SectionSubscribe.css"


const SectionSubscribe = () => {
  return (
    <div className="SectionSubscribe">
      <div className="section-title">
        <CustomTitle
          title="Subscribe To Get Discounts, Updates & More"
          desc="Monthly product updates, industry news and more!"
        />
      </div>
      <div className="section-content">
        <div className="subscribe-mail">
            <input type="text" placeholder="Enter you email"/>
            <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default SectionSubscribe;
