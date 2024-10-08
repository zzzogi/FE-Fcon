import React from "react";
import "./UserLocation.css";

const UserLocation = () => {
  return (
    <div className="UserLocation">
      <div className="widget-main">
        <div className="title">
          <h4>Location</h4>
        </div>
        <div className="content">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.5498091160043!2d105.79698667593135!3d21.01067578063417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135aca73b308285%3A0xf4ff5c3693337023!2zxJAuIFRy4bqnbiBEdXkgSMawbmcsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1728151171622!5m2!1sen!2s"
            width="100%"
            height="200"
            allowfullscreen=""
            title="hello"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UserLocation;
