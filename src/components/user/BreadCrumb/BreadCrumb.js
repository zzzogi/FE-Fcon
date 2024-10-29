import React from "react";
import "./BreadCrumb.css";

const BreadCrumb = ({ title = "not found", page = "something" }) => {
  return (
    <div className="BreadCrumb">
      <h2>{title}</h2>
      <div className="current-route">
        <span>Home</span>
        <i className="bi bi-chevron-double-right"></i>
        <span className="active">{page}</span>
      </div>
    </div>
  );
};

export default BreadCrumb;
