/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../layout.css";

const Membership = () => {
  return (
    <div class="col-xl-12" style={{ marginTop: "24px" }}>
      <div class="dashboard-sec payout-section freelancer-statements plan-billing">
        <div class="page-title portfolio-title">
          <h3 class="mb-0">Plan & Billing</h3>
        </div>
        <div class="plan-billing-section">
          <div class="row row-gap">
            <div class="col-xl-4 col-md-6">
              <div class="package-detail">
                <h4>Basic Plan</h4>
                <p>Go Pro, Best for the individuals</p>
                <h3 class="package-price">
                  $19.00 <span>/ Month</span>
                </h3>
                <div class="package-feature">
                  <ul>
                    <li>12 Project Credits</li>
                    <li>10 Allowed Services</li>
                    <li>20 Days visibility</li>
                    <li>5 Featured Services</li>
                    <li>20 Days visibility</li>
                    <li>30 Days Package Expiry</li>
                    <li class="non-check">Profile Featured</li>
                  </ul>
                </div>
                <a
                  href="#payout_modal"
                  data-bs-toggle="modal"
                  class="btn btn-outline-primary btn-block"
                >
                  Select Plan
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="package-detail">
                <h4>Business</h4>
                <p>Highest selling package features</p>
                <h3 class="package-price">
                  $29.00<span>/ Month</span>
                </h3>
                <div class="package-feature">
                  <ul>
                    <li>15 Project Credits</li>
                    <li>12 Allowed Services</li>
                    <li>25 Days visibility</li>
                    <li>10 Featured Services</li>
                    <li>30 Days visibility</li>
                    <li>40 Days Package Expiry</li>
                    <li>Profile Featured</li>
                  </ul>
                </div>
                <a
                  href="#payout_modal"
                  data-bs-toggle="modal"
                  class="btn btn-outline-primary btn-block"
                >
                  Select Plan
                </a>
              </div>
            </div>
            <div class="col-xl-4 col-md-6">
              <div class="package-detail">
                <h4>The Unlimited</h4>
                <p>Drive crazy, unlimited on the go</p>
                <h3 class="package-price">
                  $79.00<span>/ Month</span>
                </h3>
                <div class="package-feature">
                  <ul>
                    <li>Unlimited Project Credits</li>
                    <li>Unlimited Services</li>
                    <li>Services Never Expire</li>
                    <li>20 Featured Services</li>
                    <li>Services Never Expire</li>
                    <li>Package Never Expire</li>
                    <li>Profile Featured</li>
                  </ul>
                </div>
                <a
                  href="#payout_modal"
                  data-bs-toggle="modal"
                  class="btn btn-outline-primary btn-block"
                >
                  Select Plan
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="page-title">
          <h3>Current Plan</h3>
        </div>
        <div class="row">
          <div class="col-lg-12">
            <div class="member-plan pro-box">
              <div class="member-detail">
                <div class="row">
                  <div class="col-md-4">
                    <h5>The Unlimited</h5>
                    <div class="yr-amt">
                      Our most popular plan for small teams.
                    </div>
                    <div class="expiry-on">
                      <span>
                        <i class="feather-calendar"></i>Renew Date:
                      </span>
                      24 JAN 2022
                    </div>
                  </div>
                  <div class="col-md-8 change-plan mt-3 mt-md-0">
                    <div>
                      <h3>$1200</h3>
                      <div class="yr-duration">Duration: One Year</div>
                    </div>
                    <div class="change-plan-btn">
                      <a href="#" class="btn btn-primary-lite">
                        Cancel Subscription
                      </a>
                      <a href="#" class="btn btn-primary black-btn">
                        Change Plan
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="table-top-section">
          <div class="table-header">
            <h5 class="mb-0">Statement</h5>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Purchased Date</th>
                <th>Details</th>
                <th>Expiry Date</th>
                <th>Type</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>15 Sep 2021</td>
                <td class="invoice-td">
                  <p class="mb-0 fw-bold">Business</p>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: "#A3A3A3",
                    }}
                  >
                    Invoice : IVIP12023598
                  </a>
                </td>
                <td>15th July 2022</td>
                <td>Monthly</td>
                <td>$200.00</td>
                <td>
                  <div class="badge badge-danger-lite">
                    <span>Inactive</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>18 Oct 2021</td>
                <td class="invoice-td">
                  <p class="mb-0 fw-bold">The Unlimited</p>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: "#A3A3A3",
                    }}
                  >
                    Invoice : IVIP12023599
                  </a>
                </td>
                <td>18th July 2023</td>
                <td>Yearly</td>
                <td>$209.00</td>
                <td>
                  <div class="badge badge-paid">
                    <span>Active</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>18 Jan 2021</td>
                <td class="invoice-td">
                  <p class="mb-0 fw-bold">Basic Plan</p>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: "#A3A3A3",
                    }}
                  >
                    Invoice : IVIP12023600
                  </a>
                </td>
                <td>19th July 2024</td>
                <td>Yearly</td>
                <td>$219.00</td>
                <td>
                  <div class="badge badge-paid">
                    <span>Active</span>
                  </div>
                </td>
              </tr>
              <tr>
                <td>18 Sep 2021</td>
                <td class="invoice-td">
                  <p class="mb-0 fw-bold">The Unlimited</p>
                  <a
                    href="#"
                    style={{
                      textDecoration: "none",
                      cursor: "pointer",
                      fontSize: "12px",
                      color: "#A3A3A3",
                    }}
                  >
                    Invoice : IVIP12023601
                  </a>
                </td>
                <td>19th July 2022</td>
                <td>Monthly</td>
                <td>$319.00</td>
                <td>
                  <div class="badge badge-danger-lite">
                    <span>Inactive</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Membership;
