/* eslint-disable jsx-a11y/anchor-is-valid */
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Image1 from "../../../assets/images/about-it-01.jpg";
import Close from "../../../assets/images/icon/close.svg";
import Image2 from "../../../assets/images/about-it-02.jpg";
import Image3 from "../../../assets/images/happy-young-man.png";
import Modal from "react-modal";

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

const PendingProjects = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div class="comp-section comp-cards">
      <div class="section-header">
        <h3 class="section-title">Pending Projects</h3>
        <div class="line"></div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image1}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#" onClick={() => openModal()}>
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image2}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#" onClick={() => openModal()}>
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image3}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#" onClick={() => openModal()}>
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image1}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#">
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image2}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#">
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 d-flex">
          <div class="card flex-fill">
            <img
              alt="Card"
              src={Image3}
              class="card-img-top"
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
                marginLeft: "25px",
              }}
            />
            <div class="card-header">
              <h5 class="card-title mb-0">Card with image and button</h5>
            </div>
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <div style={{ display: "flex", gap: "8px" }}>
                <a class="btn btn-primary" href="#">
                  See more
                </a>
                <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
                  Approve
                </a>
                <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
                  Reject
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "600px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
              marginBottom: "24px",
            }}
          >
            <h3 class="section-title">Review project</h3>
            <img
              src={Close}
              alt="icon"
              onClick={() => closeModal()}
              style={{
                cursor: "pointer",
              }}
            />
          </div>
          <div
            style={{
              alignSelf: "flex-start",
            }}
          >
            <h5 class="card-title mb-0">Card with image and button</h5>

            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>

            <img
              alt="Card"
              src={Image3}
              style={{
                maxWidth: "350px",
                maxHeight: "250px",
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            gap: "8px",

            borderTop: "1px solid rgba(0, 0, 0, 0.4)",
            padding: "6px",
          }}
        >
          <a class="btn bg-success" style={{ color: "#FFF" }} href="#">
            Approve
          </a>
          <a class="btn bg-danger" style={{ color: "#FFF" }} href="#">
            Reject
          </a>
        </div>
      </Modal>
    </div>
  );
};

export default PendingProjects;
