/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import Image1 from "../../../assets/images/about-it-01.jpg";
import Close from "../../../assets/images/icon/close.svg";
import Image2 from "../../../assets/images/about-it-02.jpg";
import Image3 from "../../../assets/images/happy-young-man.png";
import Modal from "react-modal";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailModal from "./DetailModal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "400px",
    minHeight: "600px",
  },
};

function convertDate(dateStr) {
  // Create a Date object from the string
  const date = new Date(dateStr);

  // Get day, month, and year components
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  // Return formatted Date
  return `${day}/${month}/${year}`;
}

const PendingProjects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    console.log("nice");
    setIsOpen(false);
  }

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/Post/getAllPosts`
        );
        if (response.data.success) {
          const filteredByStatus = response.data.data.filter(
            (blog) => blog.status !== "active" && blog.status !== "inactive"
          );

          setBlogs(filteredByStatus);
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
  }, [blogs.length]);

  const handleApprove = async (postInfo) => {
    try {
      const response = await axios.put(
        `https://api-be.fieldy.online/api/Post/UpdatePost`,
        { ...postInfo, status: "active" }
      );
      if (response.data.success) {
        const filteredByStatus = response.data.data.filter(
          (blog) => blog.status !== "active"
        );

        setBlogs(filteredByStatus);
        toast("Approve thành công!", {
          type: "success",
        });
      } else {
        setError("Failed to load blogs.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleReject = async (postInfo) => {
    try {
      const response = await axios.put(
        `https://api-be.fieldy.online/api/Post/UpdatePost`,
        { ...postInfo, status: "inactive" }
      );
      if (response.data.success) {
        const filteredByStatus = response.data.data.filter(
          (blog) => blog.status !== "active"
        );

        setBlogs(filteredByStatus);
        toast("Reject thành công!", {
          type: "info",
        });
      } else {
        setError("Failed to load blogs.");
      }
    } catch (err) {
      setError("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div class="comp-section comp-cards">
      <div class="section-header">
        <h3 class="section-title">Pending Projects</h3>
        <div class="line"></div>
      </div>
      <div class="row">
        {blogs.map((blog, index) => {
          return (
            <>
              <div class="col-12 col-md-6 col-lg-4 d-flex" onClick={openModal}>
                <div class="card flex-fill">
                  <img
                    alt="Card"
                    src={blog?.imgurl || Image3}
                    class="card-img-top"
                    style={{
                      maxWidth: "350px",
                      maxHeight: "250px",
                      marginLeft: "25px",
                    }}
                  />
                  <div class="card-header">
                    <h5 class="card-title mb-0">{blog.title}</h5>
                  </div>
                  <div class="card-body">
                    <p class="card-text">{blog.description}</p>
                    <p class="card-text">
                      Ngày tạo: {convertDate(blog.createdAt)}
                    </p>
                    <div style={{ display: "flex", gap: "8px" }}>
                      {/* <a class="btn btn-primary" href="#">
                  See more
                </a> */}
                      <button
                        class="btn bg-success"
                        style={{ color: "#FFF" }}
                        onClick={() => handleApprove(blog)}
                      >
                        Approve
                      </button>
                      <button
                        class="btn bg-danger"
                        style={{ color: "#FFF" }}
                        onClick={() => handleReject(blog)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <DetailModal
                modalIsOpen={modalIsOpen}
                closeModal={closeModal}
                data={blog}
              />
            </>
          );
        })}
      </div>
      {blogs.length === 0 ? (
        <div>No pending posts</div>
      ) : (
        <div style={{ paddingBottom: "32px", zIndex: -1 }}>
          <ul class="pagination mb-4">
            <li class="page-item disabled">
              <a class="page-link" href="#" tabindex="-1">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item ">
              <a class="page-link" href="#">
                2 <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default PendingProjects;
