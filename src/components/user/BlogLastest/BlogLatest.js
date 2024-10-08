import React from "react";
import "./BlogLatest.css";
import BlogImg1 from "../../../assets/images/blog/blog-thumb-03.jpg";

const BlogLatest = () => {
  const blogLatest = [
    {
      name: "Kofejob - How to get job through online?",
      createdAt: "May 2021",
      image: BlogImg1,
    },
    {
      name: "People who completed NAND technology got job 90%",
      createdAt: "May 2021",
      image: BlogImg1,
    },
    {
      name: "There are many variations of passages",
      createdAt: "May 2021",
      image: BlogImg1,
    },
  ];

  return (
    <div className="BlogLatest">
      <div className="widget-main">
        <div className="title">
          <h4>Latest Posts</h4>
        </div>
        <div className="content">
          <div className="blog-list">
            {blogLatest.map((blog) => {
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
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogLatest;
