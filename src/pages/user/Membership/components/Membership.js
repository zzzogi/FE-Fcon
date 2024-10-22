/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie"; // Import js-cookie for handling cookies
import "../layout.css";

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;

  console.log(apiUrl);

  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch(
          `${apiUrl}/MembershipPlan/getAllMembershipPlans`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        console.log("Raw API response:", data); // Log full response

        // Extract the membership plans from the 'data' field in the response
        const plansData = Array.isArray(data.data) ? data.data : [];

        console.log("Parsed plans data:", plansData); // Log parsed data

        setPlans(plansData);
      } catch (error) {
        console.error("Error fetching membership plans:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembershipPlans();
  }, []);

  //**fetching payment api */
  const handleSelectPlan = async (plan) => {
    const accountId = Cookies.get("userId"); // Generate or fetch the actual account ID here
    const amount = plan.price; // Use the plan price

    try {
      const response = await fetch(
        `http://103.179.184.83:7979/api/Payment/request-top-up-wallet-with-payos?userId=${accountId}&amount=${amount}`,
        {
          method: "POST", // or GET based on your API requirements
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();
      console.log("Payment API response:", data); // Log the payment response

      if (data) {
        // Redirect to the payment URL
        window.location.href = data.data; // Navigate to the payment URL
      } else {
        // Handle the error case (e.g., show a message to the user)
        alert(data.message || "Failed to create payment URL.");
      }
    } catch (error) {
      console.error("Error during payment request:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  if (loading) {
    return <p>Loading membership plans...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="col-xl-12" style={{ marginTop: "24px" }}>
      <div className="dashboard-sec payout-section freelancer-statements plan-billing">
        <div className="page-title portfolio-title">
          <h3 className="mb-0">Plan & Billing</h3>
        </div>
        <div className="plan-billing-section">
          <div className="row row-gap">
            {plans.length > 0 ? (
              plans.map((plan) => (
                <div className="col-xl-4 col-md-6" key={plan.planId}>
                  <div className="package-detail">
                    <h4>{plan.name}</h4>
                    <p>{plan.description}</p>
                    <h3 className="package-price">
                      ${plan.price} <span>/ Month</span>
                    </h3>
                    <div className="package-feature">
                      <ul>
                        {plan.features.split(", ").map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleSelectPlan(plan)} // Trigger the payment request
                      className="btn btn-outline-primary btn-block"
                    >
                      Select Plan
                    </button>
                    {/* <a
                      href="#payout_modal"
                      data-bs-toggle="modal"
                      className="btn btn-outline-primary btn-block"
                    >
                      Select Plan
                    </a> */}
                  </div>
                </div>
              ))
            ) : (
              <p>No plans available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;

{
  /* <div class="page-title">
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
        </div> */
}
{
  /* </div>
    </div>
  );
};

export default Membership; */
}
