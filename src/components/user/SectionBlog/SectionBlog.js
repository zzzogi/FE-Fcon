import React from "react";
import "./SectionBlog.css";
import CustomTitle from "../CustomTitle/CustomTitle";
import BlogImg1 from "../../../assets/images/blog/blog-01.jpg";
import BlogImg2 from "../../../assets/images/blog/blog-02.jpg";
import AuthorImg1 from "../../../assets/images/img-02.jpg";
import AuthorImg2 from "../../../assets/images/img-03.jpg";


const BlogCardMini = ({ data }) => {
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
      <a href>
        Read more <i className="fas fa-arrow-right ms-1"></i>
      </a>
    </div>
  );
};

const SectionBlog = () => {
  const blogData = [
    {
      title: "Choose a Blogging Platform",
      desc: "Select a blogging platform that suits your needs. WordPress, Blogger, and Medium are popular options.",
      image: BlogImg1,
      author: {
        name: "Aidan Funnell",
        avatar: AuthorImg1,
      },
      createdAt: "4 Oct 2023",
    },
    {
      title: "Pick a Domain Name",
      desc: "Choose a memorable and relevant domain name for your blog. Ideally, it should reflect your niche and personal brand.",
      image: BlogImg2,
      author: {
        name: "Deborah Angel",
        avatar: AuthorImg2,
      },
      createdAt: "10 Oct 2023",
    },
    {
      title: "Analyze and Improve",
      desc: "Use analytics tools (e.g., Google Analytics) to track your blog's performance. Analyze which content performs well and adjust your strategy accordingly.",
      image: BlogImg2,
      author: {
        name: "Darren Elder",
        avatar: AuthorImg2,
      },
      createdAt: "3 Nov 2023",
    },
    
  ];

  return (
    <div className="SectionBlog">
      <div className="section-title">
        <CustomTitle
          title="Our Blog"
          desc="Freelancing refers to working as an independent contractor"
        />
      </div>

      <div className="section-content">
        <div className="blog-list">
          {blogData.map((blog) => {
            return (
              <div className="blog-item">
                <BlogCardMini data={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionBlog;
