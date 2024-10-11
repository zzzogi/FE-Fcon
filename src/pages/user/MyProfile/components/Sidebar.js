import React from "react";
import "../layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MapPin from "../../../../assets/images/icon/map-pin.svg";
import AirPlay from "../../../../assets/images/icon/airplay.svg";
import Phone from "../../../../assets/images/icon/phone.svg";
import Email from "../../../../assets/images/icon/email.svg";
import Globe from "../../../../assets/images/icon/globe.svg";
import Calendar from "../../../../assets/images/icon/calendar.svg";
import Close from "../../../../assets/images/icon/close.svg";
import Eye from "../../../../assets/images/icon/eye.svg";
import Pen from "../../../../assets/images/icon/edit-2.svg";
import ChipList from "./Chip";

const Sidebar = ({ chips }) => {
  const addRow = () => {
    const rowToAdd = document.getElementById("add_row1");
    let html = "";
    html += '<div class="row" id="form-row">';
    html += '<div class="col-md-4 input-block">';
    html += '<label for="" class="form-label">Milestone name</label>';
    html +=
      '<input type="text" class="form-control" placeholder="Milestone name">';
    html += "</div>";
    html += '<div class="col-md-2 input-block floating-icon">';
    html += '<label for="" class="form-label">Amount</label>';
    html += '<input type="text" class="form-control" placeholder="Amount">';
    html += '<span><i class="feather-dollar-sign"></i></span>';
    html += "</div>";
    html += '<div class="col-md-3 input-block floating-icon">';
    html += '<label for="" class="form-label">Start Date</label>';
    html += '<input type="date" class="form-control " placeholder="Choose">';
    html += '<span><i class="feather-calendar"></i></span>';
    html += "</div>";
    html += '<div class="col-md-3 input-block floating-icon">';
    html += '<label for="" class="form-label">End Date</label>';
    html += '<input type="date" class="form-control " placeholder="Choose">';
    html += '<span><i class="feather-calendar"></i></span>';
    html += "</div>";
    html += '<div class="col-md-12">';
    html += '<div class="new-addd">';
    html += '<a  id="remove_row" class="remove_row"> Remove</a>';
    html += "</div>";
    html += "</div>";
    return (rowToAdd.innerHTML += html);
  };

  // remove row
  document.addEventListener("click", function (event) {
    if (event.target && event.target.id === "remove_row") {
      const formRow = event.target.closest("#form-row");
      if (formRow) {
        formRow.remove();
      }
    }
  });

  return (
    <>
      <div class="modal fade" id="file">
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
                borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
              }}
            >
              <h4 class="modal-title">Send Your Proposal</h4>
              <img
                src={Close}
                alt="icon"
                class="icon"
                data-bs-dismiss="modal"
                style={{ fontSize: 24, cursor: "pointer" }}
              ></img>
            </div>
            <div class="modal-body">
              <div class="modal-info proposal-modal-info">
                <form
                  action={(e) => {
                    e.preventDefault();
                    console.log("nice");
                  }}
                >
                  <div class="feedback-form proposal-form">
                    <div class="row">
                      <div class="col-md-6 input-block">
                        <label class="form-label">Your Price</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Your Price"
                        />
                      </div>
                      <div class="col-md-6 mb-3">
                        <label class="form-label">Estimated Delivery</label>
                        <div class="input-group">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="Estimated Hours"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                          />
                          <span class="input-group-text" id="basic-addon2">
                            Days
                          </span>
                        </div>
                      </div>
                      <div class="col-md-12 input-block">
                        <label class="form-label">Cover Letter</label>
                        <textarea class="form-control summernote"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="suggested-milestones-form">
                    <div class="row">
                      <div class="col-md-4 input-block">
                        <label class="form-label">Milestone name</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Milestone name"
                        />
                      </div>
                      <div class="col-md-2 input-block floating-icon">
                        <label class="form-label">Amount</label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Amount"
                        />
                        <span>
                          <i class="feather-dollar-sign"></i>
                        </span>
                      </div>
                      <div class="col-md-3 input-block floating-icon">
                        <label class="form-label">Start Date</label>
                        <input
                          type="date"
                          class="form-control "
                          placeholder="Choose"
                        />
                        <span>
                          <i class="feather-calendar"></i>
                        </span>
                      </div>
                      <div class="col-md-3 input-block floating-icon">
                        <label class="form-label">End Date</label>
                        <input
                          type="date"
                          class="form-control "
                          placeholder="Choose"
                        />
                        <span>
                          <i class="feather-calendar"></i>
                        </span>
                      </div>
                      <div class="col-md-12">
                        <div
                          class="new-addd"
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "center",
                          }}
                        >
                          <button
                            onClick={() => addRow()}
                            class="btn"
                            style={{
                              color: "#e65425",
                            }}
                          >
                            + Add New
                          </button>
                        </div>
                      </div>
                    </div>
                    <div id="add_row1"></div>
                  </div>
                  <div class="proposal-features">
                    <div class="proposal-widget proposal-warning">
                      <label class="custom_check">
                        <input type="checkbox" name="select_time" checked />
                        <span class="checkmark"></span>
                        <span class="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span class="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                    <div class="proposal-widget proposal-blue">
                      <label class="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span class="checkmark"></span>
                        <span class="proposal-text">
                          Stick this Proposal to the Top
                        </span>
                        <span class="proposal-text float-end">$12.00</span>
                      </label>
                      <p>
                        The sticky proposal will always be displayed on top of
                        all the proposals.
                      </p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 submit-section">
                      <label class="custom_check">
                        <input type="checkbox" name="select_time" />
                        <span class="checkmark"></span> I agree to the Terms And
                        Conditions
                      </label>
                    </div>
                    <div class="col-md-12 submit-section text-end">
                      <button
                        data-bs-toggle="modal"
                        class="btn btn-cancel submit-btn"
                      >
                        Cancel
                      </button>
                      <a
                        data-bs-toggle="modal"
                        data-bs-dismiss="modal"
                        href="#success"
                        class="btn btn-primary submit-btn"
                      >
                        Send Proposal
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade custom-modal" id="success">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content proposal-modal-info">
            <div class="modal-header">
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="text-center modal-body-content pt-0">
                <h5 class="modal-title">Submitted Successfully</h5>
                <p>You will be Notified once, your Proposal approves.</p>
              </div>
              <div class="col-md-12 submit-section text-center">
                <a
                  data-bs-dismiss="modal"
                  href="freelancer-dashboard.html"
                  class="btn btn-primary submit-btn"
                >
                  Go to Dashboard
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-4 col-md-12 sidebar-right theiaStickySidebar project-client-view">
        <div class="card budget-widget ">
          <div class="budget-widget-details">
            <h6>Budget</h6>
            <h4>$125 - $180</h4>
            <p class="mb-0">Hourly Rate</p>
            <ul class="budget-profiles">
              <li>
                <h6>
                  <img src={MapPin} alt="icon" class="icon" />
                  Location
                </h6>
                <h5>London, UK</h5>
              </li>
              <li>
                <h6>
                  <img src={AirPlay} alt="icon" class="icon" />
                  Years of Experience
                </h6>
                <h5>5 Years</h5>
              </li>
              <li>
                <h6>
                  <img src={Calendar} alt="icon" class="icon" />
                  Delivery Time
                </h6>
                <h5>3-5 Days</h5>
              </li>
              <li>
                <h6>
                  <img src={Globe} alt="icon" class="icon" />
                  Language Level
                </h6>
                <h5>Basic</h5>
              </li>
              <li>
                <h6>
                  <img src={Phone} alt="icon" class="icon" />
                  Phone
                </h6>
                <h5>+91 9988776655</h5>
              </li>
              <li>
                <h6>
                  <img src={Email} alt="icon" class="icon" />
                  Mail
                </h6>
                <h5>info@example.com</h5>
              </li>
            </ul>
          </div>
          <div>
            <a
              data-bs-toggle="modal"
              href="#file"
              class="btn proposal-btn btn-primary"
            >
              Send Invite
            </a>
          </div>
        </div>
        <div class="card budget-widget">
          <ChipList title="Skills" chips={[{}]} />
        </div>
        <div class="card budget-widget">
          <h6>Location</h6>
          <div class="map-location p-0">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
