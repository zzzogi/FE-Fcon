/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import Eye from "../../../assets/images/icon/eye.svg";
import Trash from "../../../assets/images/icon/trash-2.svg";
import Avatar1 from "../../../assets/images/avatar/avatar-10.jpg";
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
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [viewModalIsOpen, setViewModalIsOpen] = useState(false);

  const navigate = useNavigate();

  function openDeleteModal() {
    setDeleteModalIsOpen(true);
  }

  function openViewModal() {
    setViewModalIsOpen(true);
  }

  function closeDeleteModal() {
    setDeleteModalIsOpen(false);
  }

  function closeViewModal() {
    setViewModalIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={viewModalIsOpen}
        onRequestClose={closeViewModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minWidth: "500px",
            maxWidth: "700px",
            minHeight: "500px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: "18px",
              }}
            >
              Chi tiết ứng viên
            </div>
            <div
              style={{
                fontWeight: 700,
                cursor: "pointer",
              }}
              onClick={closeViewModal}
            >
              X
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6 d-flex align-items-center flex-column">
              <img
                src={Avatar1}
                alt="proposal profile"
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "50%",
                }}
              />
            </div>
            <div class="col-lg-6 d-flex flex-column">
              <p>Nguyễn Văn A</p>
              <p>Ngày sinh: 03/05/1999</p>
              <p>Budget: 300-500$</p>
              <p>Language level: Intermediate</p>
              <p>Delibery Time: Intermediate</p>
            </div>
            <div class="col-lg-12 d-flex flex-column mt-4">
              <p
                style={{
                  fontWeight: 800,
                }}
              >
                Lời nhắn tới nhà tuyển dụng:
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "12px",
            }}
          >
            <button class="btn" onClick={closeViewModal}>
              Đóng
            </button>
            <button
              class="btn bg-success "
              style={{
                color: "#FFF",
              }}
              onClick={() => {
                toast("Đã tuyển ứng viên", {
                  type: "success",
                  position: "top-center",
                  onClose: closeViewModal,
                });
              }}
            >
              Duyệt
            </button>
            <button
              class="btn bg-danger "
              style={{
                color: "#FFF",
              }}
              onClick={() => {
                toast("Đã xoá ứng viên", {
                  type: "error",
                  position: "top-center",
                  onClose: closeViewModal,
                });
              }}
            >
              Xoá
            </button>
          </div>
        </div>
      </Modal>
      <Modal
        isOpen={deleteModalIsOpen}
        onRequestClose={closeDeleteModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <p>Bạn có chắc chắc muốn xoá ứng viên này?</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <button class="btn" onClick={closeDeleteModal}>
            Huỷ
          </button>
          <button
            class="btn bg-danger "
            style={{
              color: "#FFF",
            }}
            onClick={() => {
              toast("Đã xoá ứng viên", {
                type: "error",
                position: "top-center",
                onClose: closeDeleteModal,
              });
            }}
          >
            Xoá
          </button>
        </div>
      </Modal>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Proposals" page="Proposals" />
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
              <div
                style={{
                  fontSize: "24px",
                  fontWeight: 700,
                  marginBottom: "24px",
                }}
              >
                Danh sách ứng viên của bạn
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
                        <img
                          src={Avatar1}
                          alt="proposal profile"
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                        <h4 class="company-detail-title">Nguyễn Văn A</h4>
                      </div>

                      <div>
                        <div
                          style={{
                            display: "flex",
                            gap: "12px",
                            justifyContent: "space-between",
                          }}
                        >
                          <div class="row">
                            <div class="col-lg-6">
                              <p>Budget: $$$$</p>
                            </div>
                            <div class="col-lg-6">
                              <p>Language level: Beginner</p>
                            </div>
                            <div class="col-lg-6">
                              <p>Delivery time: Beginner</p>
                            </div>
                            <div class="col-lg-6">
                              <p>Ngày gửi: 04/06/1998</p>
                            </div>
                          </div>
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
                              onClick={() => openViewModal()}
                            />

                            <img
                              src={Trash}
                              alt="icon"
                              class="icon"
                              onClick={() => openDeleteModal()}
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
                      <h5>Tổng số ứng viên</h5>
                      <h5 style={{ fontWeight: 700 }}>4</h5>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Ứng viên đã duyệt</h5>
                      <h5 style={{ fontWeight: 700 }}>2</h5>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>Ứng viên bị từ chối</h5>
                      <h5 style={{ fontWeight: 700 }}>1</h5>
                    </li>
                  </ul>
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
