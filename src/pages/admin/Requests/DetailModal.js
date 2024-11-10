/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Modal from "react-modal";
import Close from "../../../assets/images/icon/close.svg";
import Image3 from "../../../assets/images/happy-young-man.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    minWidth: "800px",
    minHeight: "600px",
    zIndex: 9999,
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

const DetailModal = ({ modalIsOpen, closeModal, data }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
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
            onClick={closeModal}
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
          <h3
            class="section-title"
            style={{
              fontWeight: 900,
            }}
          >
            {data.title}
          </h3>

          <p class="card-text">
            Content:{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              {data.description}
            </span>
          </p>

          <img
            alt="Card"
            src={Image3}
            style={{
              maxWidth: "350px",
              maxHeight: "250px",
              marginBottom: 8,
            }}
          />
          {/* budgetOrSalary */}
          <p class="card-text">
            Budget/Salary:{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              {data?.budgetOrSalary || "No info"}
            </span>
          </p>
          <p class="card-text">
            Skills:{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              {data.skills}
            </span>
          </p>
          <p class="card-text">
            Created Date:{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              {convertDate(data.createdAt)}
            </span>
          </p>
          <p class="card-text">
            Status:{" "}
            <span
              style={{
                color: "blue",
              }}
            >
              {data.status}
            </span>
          </p>
        </div>
      </div>
      {/* <div
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
      </div> */}
    </Modal>
  );
};

export default DetailModal;
