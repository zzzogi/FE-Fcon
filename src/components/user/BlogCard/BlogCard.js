import React from "react";
import "./BlogCard.css";
import MeetingImage from "../../../assets/images/meeting.jpg";
import AvaPlaceholder from "../../../assets/images/avatar_placeholder.png";

function convertDate(dateStr) {
  // Create a Date object from the string
  const date = new Date(dateStr);

  // Get day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Return formatted date
  return `${day}/${month}/${year}`;
}

const BlogCard = ({ data }) => {
  return (
    <div className="BlogCard">
      <div className="image">
        <img src={data?.imgUrl || MeetingImage} alt="blog-img" />
      </div>
      <div className="author">
        <div className="author-container">
          <div className="avatar">
            <img
              src={data.author ? data.author.avatar : AvaPlaceholder}
              alt="blog-author"
            />
          </div>
          <p className="name">{data.author ? data.author.name : "Guest"}</p>
        </div>
        <p>
          <i className="bi bi-calendar-check-fill"></i>{" "}
          {convertDate(data.createdAt)}
        </p>
      </div>
      <div className="info">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
