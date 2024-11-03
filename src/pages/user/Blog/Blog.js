import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "./Blog.css";

import BlogCard from "../../../components/user/BlogCard/BlogCard";
import BlogLatest from "../../../components/user/BlogLastest/BlogLatest";
import BlogTags from "../../../components/user/BlogTags/BlogTags";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/Post/getAllPosts`
        );
        if (response.data.success) {
          const filteredByType = response.data.data.filter(
            (project) => project.postTypeId === 2
          );

          const skillsArray = response.data.data.flatMap((item) =>
            item.skills.split(",").map((skill) => skill.trim())
          );

          const locations = [
            "Hà Nội",
            "Đà Nẵng",
            "Hồ Chí Minh",
            "Hải Phòng",
            "Japan",
            "Thủ Đức",
            "Hòa Lạc",
          ];
          const projectsWithLocations = filteredByType.map(
            (project, index) => ({
              ...project,
              position: locations[index % locations.length],
            })
          );

          setBlogs(projectsWithLocations);
          setTags(skillsArray);
          // setFilteredProjects(projectsWithLocations);
        } else {
          setError("Failed to load projects.");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  /* NAVIGATE TO PAGE  ------------------- */
  const onNavRoute = (endpoint) => {
    navigate(endpoint);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
                    <div
                      className="blog-card"
                      key={blog.name + "_" + index}
                      onClick={() => onNavRoute(`/blog/${blog.postId}`)}
                      // onClick={() => onNavRoute(`/blog/[id_or_alias]`)}
                    >
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
                {/* <div className="blog-categories">
                  <BlogCategories />
                </div> */}
                <div className="blog-tags">
                  <BlogTags tags={tags} />
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
