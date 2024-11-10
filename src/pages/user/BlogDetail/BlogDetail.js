import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import "./BlogDetail.css";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import BlogLatest from "../../../components/user/BlogLastest/BlogLatest";
import BlogCategories from "../../../components/user/BlogCategories/BlogCategories";
import BlogTags from "../../../components/user/BlogTags/BlogTags";
import "./BlogDetail.css";
import AvaPlaceholder from "../../../assets/images/avatar_placeholder.png";
import Email from "../../../assets/images/evelop.svg";
import Phone from "../../../assets/images/phone.svg";
import { useLocation } from "react-router-dom";
import Cookies from "js-cookie";

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

function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

const BlogDetail = () => {
  const location = useLocation();
  const postId = location.pathname.match(/\/blog\/(\d+)$/)[1];

  const [blogs, setBlogs] = useState();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [tags, setTags] = useState([]);
  const [userName, setUserName] = useState();

  const token = Cookies.get("token");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/Post/getById/${postId}`
        );

        console.log(response);
        if (response.data.success) {
          const skillsArray = response.data.data.skills
            .split(",")
            .map((item) => item.trim());

          setBlogs(response.data.data);
          setTags(skillsArray);
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
  }, [postId]);

  useEffect(() => {
    const fetechUserName = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/User/getUserById/${
            blogs?.userId || 1
          }`,

          {
            headers: {
              Authorization: `Bearer ${token}`,
              accept: "*/*",
            },
          }
        );

        if (response.data.success) {
          setUserName(response.data.data.username);
        } else {
          setError("Failed to load projects.");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };
    fetechUserName();
  }, [token, blogs]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="BlogDetail">
      {/* Bread crumb and current route */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Post Details" page="Post Details" />
        </div>
      </div>

      <div className="section-blog-detail">
        <div className="container">
          <div className="main-flex">
            {/* Main content */}
            <div className="blog-content">
              <div className="blog-image">
                <img
                  src={
                    blogs?.imgUrl ||
                    `https://picsum.photos/id/${getRandomNumber()}/536/354`
                  }
                  alt="blog-img"
                  style={{
                    maxWidth: "840px",
                    maxHeight: "320px",
                    objectFit: "contain",
                  }}
                />
              </div>
              <div className="blog-name">
                <h3>{blogs?.title}</h3>
              </div>
              <div className="blog-info">
                <div className="author">
                  <div className="avatar">
                    <img src={AvaPlaceholder} alt="blog-author" />
                  </div>
                  <p className="name">
                    {blogs?.name || userName || "Loading..."}
                  </p>
                </div>
                <div className="created-at item-flex">
                  <i class="bi bi-calendar"></i>{" "}
                  {convertDate(blogs?.createdAt) || "A while ago"}
                </div>
                {/* <div className="comments item-flex">
                  <i class="bi bi-chat-square-dots"></i> {blogs.reviews.length}{" "}
                  Reviews
                </div> */}
                <div className="tips item-flex">
                  <i class="bi bi-tags-fill"></i> {blogs?.skills || "No tags"}
                </div>
                <div className="tips item-flex">
                  Budget: {blogs?.budgetOrSalary || "0"} VND
                </div>
                {/* <div className="tips item-flex">
                  <img src={Phone} alt="icons" className="icon" />
                  {blogs.contactInfo || "No phone number"}
                </div>
                <div className="tips item-flex">
                  <img src={Email} alt="icons" className="icon" />
                  {blogs.email || "No email"}
                </div> */}
              </div>
              <div className="blog-description">
                <p>{blogs.description}</p>
              </div>

              {/* blog comment area */}
              {/* <div className="comment-blog">
                <div className="comment-title">Comment this blog</div>
                <div className="comment-input">
                  <textarea
                    rows="4"
                    class="form-control"
                    style={{ height: "118px" }}
                  ></textarea>
                </div>
                <button>Comment</button>
              </div> */}

              {/* Comment list area */}
              {/* <div className="comment-container">
                <div className="comment-title">Comments (12)</div>
                <div className="comment-list">
                  <div className="comment-item">
                    <div className="image">
                      <div className="avatar">
                        <img src={AuthImg} alt="author-avatar" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="commentor-info">
                        Michelle Fairfax
                        <span>Jun 6, 2021</span>
                      </div>
                      <p className="comment-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam viverra euismod odio, gravida pellentesque urna
                        varius vitae, gravida pellentesque urna varius vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>

                      <div className="reply-button">
                        <i class="bi bi-reply"></i>Reply
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="image">
                      <div className="avatar">
                        <img src={AuthImg} alt="author-avatar" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="commentor-info">
                        Michelle Fairfax
                        <span>Jun 6, 2021</span>
                      </div>
                      <p className="comment-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam viverra euismod odio, gravida pellentesque urna
                        varius vitae, gravida pellentesque urna varius vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>

                      <div className="reply-button">
                        <i class="bi bi-reply"></i>Reply
                      </div>
                    </div>
                  </div>
                  <div className="comment-item">
                    <div className="image">
                      <div className="avatar">
                        <img src={AuthImg} alt="author-avatar" />
                      </div>
                    </div>
                    <div className="content">
                      <div className="commentor-info">
                        Michelle Fairfax
                        <span>Jun 6, 2021</span>
                      </div>
                      <p className="comment-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam viverra euismod odio, gravida pellentesque urna
                        varius vitae, gravida pellentesque urna varius vitae.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>

                      <div className="reply-button">
                        <i class="bi bi-reply"></i>Reply
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* Filter sidebar */}
            <div className="filter-side">
              <div className="filter-sticky">
                {/* <div className="blog-lastest">
                  <BlogLatest />
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

export default BlogDetail;
