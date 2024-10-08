import React from "react";
import "./BlogCard.css";


const BlogCard = ({ data }) => {
  return (
    <div className="BlogCard">
      <div className="image">
        <img src={data.image} alt="blog-img" />
      </div>
      <div className="author">
        <div className="author-container">
          <div className="avatar">
            <img
              src={data.author ? data.author.avatar : ""}
              alt="blog-author"
            />
          </div>
          <p className="name">{data.author ? data.author.name : ""}</p>
        </div>
        <p>
          <i className="bi bi-calendar-check-fill"></i> {data.createdAt}
        </p>
      </div>
      <div className="info">
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default BlogCard;
