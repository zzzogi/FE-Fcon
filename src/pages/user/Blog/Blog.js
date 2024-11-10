import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import BlogCard from "../../../components/user/BlogCard/BlogCard";
import BlogTags from "../../../components/user/BlogTags/BlogTags";
import "./Blog.css";
import Cookies from "js-cookie";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [tags, setTags] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [userNames, setUserNames] = useState({});
  const navigate = useNavigate();

  const token = Cookies.get("token");

  const getUserById = useCallback(
    async (id) => {
      const response = await axios.get(
        `https://api-be.fieldy.online/api/User/getUserById/${id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "*/*",
          },
        }
      );
      console.log(response.data.data.username);
      return response.data.data.username;
    },
    [token]
  );

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/Post/getAllPosts`
        );
        if (response.data.success) {
          const filteredByType = response.data.data.filter(
            (blog) => blog.postTypeId === 2 && blog.status === "active"
          );

          const skillsArray = response.data.data.flatMap((item) =>
            item.skills.split(",").map((skill) => skill.trim())
          );

          setBlogs(filteredByType);
          setFilteredBlogs(filteredByType);
          setTags(skillsArray);
        } else {
          setError("Failed to load blogs.");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const fetchUserNames = async () => {
      const names = {};
      await Promise.all(
        filteredBlogs.map(async (blog) => {
          const username = await getUserById(blog.userId);
          names[blog.userId] = username;
        })
      );
      setUserNames(names);
    };
    fetchUserNames();
  }, [filteredBlogs, getUserById]);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const searchedBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredBlogs(searchedBlogs);
    } else {
      setFilteredBlogs(blogs);
    }
  };

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
          <BreadCrumb title="List of Posts" page="Posts" />
        </div>
      </div>

      <div className="section-blog-list">
        <div className="container">
          <div className="main-flex">
            {/* Sidebar */}
            <div className="filter-side">
              <div className="filter-sticky">
                <div className="blog-tags">
                  <BlogTags tags={tags} />
                  {/* <button
                    onClick={() => getUserById(51)}
                    style={{
                      width: 150,
                      height: 25,
                    }}
                  >
                    Click me
                  </button> */}
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="blog-list">
              {/* Search bar */}
              <div className="blog-list-filter">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-bar"
                />
                <span>Found {filteredBlogs.length} Results</span>
              </div>

              {/* Blog cards */}
              <div className="blog-list-inner">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog, index) => (
                    <div
                      className="blog-card"
                      key={blog.name + "_" + index}
                      onClick={() => onNavRoute(`/blog/${blog.postId}`)}
                    >
                      <BlogCard
                        data={blog}
                        userName={userNames[blog.userId] || "Loading..."}
                      />
                    </div>
                  ))
                ) : (
                  <p>No blogs found based on your search.</p>
                )}
              </div>

              {/* Navigator */}
              <div className="blog-list-navigator">
                <div className="arrow arrow-left">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="number-page page-actived">1</div>
                <div className="number-page">2</div>
                <div className="number-page">3</div>
                <div className="number-page dot-summary">...</div>
                <div className="number-page">20</div>
                <div className="arrow arrow-right">
                  <i className="bi bi-chevron-right"></i>
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
