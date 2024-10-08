import React, { useEffect } from "react";
import "./CustomTitle.css"


const CustomTitle = ({ title, desc, position = "middle" }) => {


  useEffect(() => {
   
  }, [position])

  return (
    <div className={"CustomTitle " + position}>
      <h2>{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default CustomTitle;
