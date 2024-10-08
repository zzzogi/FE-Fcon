import React from "react";
import "./BlogCategories.css";

const BlogCategories = () => {
  return (
    <div className="BlogCategories">
      <div className="widget-main">
        <div className="title">
          <h4>Blog Categories</h4>
        </div>
        <div className="content">
          <div className="blog-list">
            <ul class="category-link">
              <li>
                <a href>Web Development</a>
              </li>
              <li>
                <a href>IT Consultancy</a>
              </li>
              <li>
                <a href>Email Marketing</a>
              </li>
              <li>
                <a href>Business Consulting</a>
              </li>
              <li>
                <a href>Apps Development</a>
              </li>
              <li>
                <a href>SEO Optimizations</a>
              </li>
            </ul>
            {/* {blogLatest.map((blog) => {
              return (
                <div className="blog-item">
                  <div className="image">
                    <img src={blog.image} alt="image-blog" />
                  </div>
                  <div className="blog-info">
                    <p className="name">
                      {blog.name}
                    </p>
                    <p className="created-at">
                      <i class="bi bi-calendar"></i> {blog.createdAt}
                    </p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCategories;
