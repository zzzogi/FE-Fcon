import React from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import { useNavigate } from "react-router-dom";
import "./Blog.css";

import BlogCard from "../../../components/user/BlogCard/BlogCard";
import BlogImg1 from "../../../assets/images/blog/blog-01.jpg";
import BlogImg2 from "../../../assets/images/blog/blog-02.jpg";
import AuthorImg1 from "../../../assets/images/img-02.jpg";
import AuthorImg2 from "../../../assets/images/img-03.jpg";
import BlogLatest from "../../../components/user/BlogLastest/BlogLatest";
import BlogCategories from "../../../components/user/BlogCategories/BlogCategories";
import BlogTags from "../../../components/user/BlogTags/BlogTags";

const Blog = () => {
  const blogs = [
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

  ];
  const navigate = useNavigate();

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  return (
    <div className="Blog">
      {/* Bread crumb and current route */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Blog List" page="Blog" />
        </div>
      </div>

      <div className="section-blog-list">
        <div className="container">
          <div className="main-flex">
            {/* Main content */}
            <div className="blog-list">
              {/* List-render */}
              <div className="blog-list-inner">
                {blogs.map((blog, index) => {
                  return (
                    <div className="blog-card" key={blog.name + "_" + index} onClick={() => onNavRoute("/blog/[id_or_alias]")}>
                      <BlogCard data={blog} />
                    </div>
                  );
                })}
              </div>

              {/* Navigator */}
              <div className="blog-list-navigator">
                <div className="arrow arrow-left">
                  <i class="bi bi-chevron-left"></i>
                </div>
                <div className="number-page page-actived">1</div>
                <div className="number-page">2</div>
                <div className="number-page">3</div>
                <div className="number-page dot-summary">...</div>
                <div className="number-page">20</div>
                <div className="arrow arrow-right">
                  <i class="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>

            {/* Filter sidebar */}
            <div className="filter-side">
              <div className="filter-sticky">
                <div className="blog-lastest">
                  <BlogLatest />
                </div>
                <div className="blog-categories">
                  <BlogCategories />
                </div>
                <div className="blog-tags">
                  <BlogTags />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
