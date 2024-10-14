/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import BlogPost from "../../admin/Blog";
import PostingSection from "./PostingSection";
import Eye from "../../../assets/images/icon/eye.svg";
import Edit from "../../../assets/images/icon/edit-2.svg";
import Trash from "../../../assets/images/icon/trash-2.svg";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const BlogReview = () => {
  const [isCreateNewBlog, setIsCreateNewBlog] = useState(false);
  const [isEditBlog, setIsEditBlog] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Bạn có chắc chắc muốn xoá bài đăng này?</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <button class="btn" onClick={closeModal}>
            Huỷ
          </button>
          <button
            class="btn bg-danger "
            style={{
              color: "#FFF",
            }}
            onClick={() => {
              toast("Đã xoá bài đăng", {
                type: "error",
                position: "top-center",
                onClose: closeModal,
              });
            }}
          >
            Xoá
          </button>
        </div>
      </Modal>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="My Blogs" page="My Blogs" />
        </div>
      </div>
      <div
        style={{
          marginTop: "24px",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-12">
              {isCreateNewBlog || isEditBlog ? (
                <PostingSection
                  onCancel={() => {
                    setIsCreateNewBlog(false);
                    setIsEditBlog(false);
                  }}
                  isEditing={isEditBlog}
                />
              ) : (
                <>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 700,
                      marginBottom: "24px",
                    }}
                  >
                    Danh sách blogs của bạn
                  </div>
                  {[1, 2, 3, 4].map((a, b) => {
                    return (
                      <div>
                        <div
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.3)",
                            borderRadius: "8px",
                            padding: "14px",
                            marginBottom: "8px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              gap: "12px",
                              alignItems: "center",
                            }}
                          >
                            <h4 class="company-detail-title">
                              Làm thế nào để ăn khoẻ hơn?
                            </h4>
                            <p>
                              {b % 2 === 1 ? (
                                <div
                                  style={{
                                    borderRadius: "8px",
                                    background: "blue",
                                    padding: "4px",
                                    color: "#FFF",
                                    fontSize: "12px",
                                  }}
                                >
                                  Pending
                                </div>
                              ) : (
                                <div
                                  style={{
                                    borderRadius: "8px",
                                    background: "green",
                                    padding: "4px",
                                    color: "#FFF",
                                    fontSize: "12px",
                                  }}
                                >
                                  {" "}
                                  Accpected
                                </div>
                              )}{" "}
                            </p>
                          </div>

                          <div>
                            <div
                              style={{
                                display: "flex",
                                gap: "12px",
                              }}
                            >
                              <p>
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard dummy text ever since
                                the 1500s, when an unknown printer took a galley
                                of type and scrambled it to make a type specimen
                                book.
                              </p>
                              <div
                                style={{
                                  display: "flex",
                                  flexDirection: "column",
                                  gap: "16px",
                                }}
                              >
                                <img
                                  src={Eye}
                                  alt="icon"
                                  class="icon"
                                  onClick={() => {
                                    navigate("/blog/:id");
                                  }}
                                />
                                <img
                                  src={Edit}
                                  alt="icon"
                                  class="icon"
                                  onClick={() => setIsEditBlog(true)}
                                />
                                <img
                                  src={Trash}
                                  alt="icon"
                                  class="icon"
                                  onClick={() => openModal()}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div style={{ paddingBottom: "32px" }}>
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
                      <li class="page-item active">
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
                </>
              )}
            </div>
            <div class="col-lg-4 col-md-12 sidebar-right">
              <div class="card budget-widget ">
                <div class="budget-widget-details">
                  <h6>Thông số</h6>
                  <ul class="budget-profiles">
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Tổng số bài đăng</h5>
                      <h5 style={{ fontWeight: 700 }}>7</h5>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Bài đăng đang chờ duyệt</h5>
                      <h5 style={{ fontWeight: 700 }}>3</h5>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Bài đăng bị từ chối</h5>
                      <h5 style={{ fontWeight: 700 }}>4</h5>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Tổng số lượt xem</h5>
                      <h5 style={{ fontWeight: 700 }}>743</h5>
                    </li>
                  </ul>
                </div>
                <div>
                  <a
                    // data-bs-toggle="modal"
                    href="#file"
                    class="btn proposal-btn btn-primary"
                    onClick={() => setIsCreateNewBlog(true)}
                  >
                    + Create new blog
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default BlogReview;
