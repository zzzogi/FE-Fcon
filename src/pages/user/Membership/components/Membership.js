import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cookies from "js-cookie";
import "../layout.css";
import { useNavigate } from "react-router-dom";

// Helper function to add 6 months to a date
const addMonths = (date, months) => {
  const newDate = new Date(date);
  newDate.setMonth(newDate.getMonth() + months);
  return newDate.toLocaleDateString();
};

const Membership = () => {
  const [plans, setPlans] = useState([]);
  const [currentPlans, setCurrentPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembershipPlans = async () => {
      try {
        const response = await fetch(
          `https://api-be.fieldy.online/api/MembershipPlan/getAllMembershipPlans`
        );
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setPlans(Array.isArray(data.data) ? data.data : []);
      } catch (error) {
        console.error("Error fetching membership plans:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const fetchCurrentPlans = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await fetch(
          `https://api-be.fieldy.online/api/Membership/getMembershipPlansByUser`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response.ok) throw new Error("Failed to fetch current plans.");

        const data = await response.json();
        setCurrentPlans(data.data?.memberships || []);
      } catch (error) {
        console.error("Error fetching current plans:", error);
      }
    };

    fetchMembershipPlans();
    fetchCurrentPlans();
  }, [navigate]);

  const handleSelectPlan = async (plan) => {
    const accountId = Cookies.get("userId");
    const token = Cookies.get("token");
    if (!accountId || !token) {
      navigate("/login");
      return;
    }

    try {
      const response = await fetch(
        `https://api-be.fieldy.online/api/Membership/AddNewMembership`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            userId: accountId,
            planId: plan.planId,
            status: "success",
          }),
        }
      );

      const data = await response.json();
      if (response.ok && data.data) {
        window.location.href = data.data;
      } else {
        alert(data.message || "Failed to create payment URL.");
      }
    } catch (error) {
      console.error("Error during payment request:", error);
      alert("An error occurred while processing the payment.");
    }
  };

  const getPlanPrice = (planId) => {
    const plan = plans.find((plan) => plan.planId === planId);
    return plan ? plan.price : "N/A";
  };

  if (loading) return <p>Loading membership plans...</p>;
  if (error) return <p>{error}</p>;

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
                      {plan.price} VND <span>/6 Months</span>
                    </h3>
                    <div className="package-feature">
                      <ul>
                        {plan.features.split(", ").map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    <button
                      onClick={() => handleSelectPlan(plan)}
                      className="btn btn-outline-primary btn-block"
                    >
                      Select Plan
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No plans available</p>
            )}
          </div>
        </div>

        {/* Current Plans Section */}
        <div className="page-title">
          <h3>Current Plans</h3>
        </div>
        <div className="row">
          {currentPlans.length > 0 ? (
            currentPlans.map((membership) => (
              <div className="col-lg-12 mb-4" key={membership.membershipId}>
                <div className="member-plan pro-box">
                  {membership.membershipPlanAssignments.map((assignment) => (
                    <div className="member-detail" key={assignment.planAssignmentId}>
                      <div className="row">
                        <div className="col-md-4">
                          <h5>{assignment.planName}</h5>
                          <div className="yr-amt">Status: {assignment.status}</div>
                          <div className="expiry-on">
                            <span>
                              <i className="feather-calendar"></i> Start Date:
                            </span>{" "}
                            {new Date(assignment.startDate).toLocaleDateString()}
                          </div>
                          <div className="expiry-on">
                            <span>
                              <i className="feather-calendar"></i> End Date:
                            </span>{" "}
                            {addMonths(assignment.startDate, 6)}
                          </div>
                        </div>
                        <div className="col-md-8 change-plan mt-3 mt-md-0">
                          <div>
                            <h3>{getPlanPrice(assignment.planId)} VND</h3>
                            <div className="yr-duration">Duration: 6 Months</div>
                          </div>
                          <div className="change-plan-btn">
                            <a href="#" className="btn btn-primary-lite">
                              Cancel Subscription
                            </a>
                            <a href="#" className="btn btn-primary black-btn">
                              Change Plan
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No active plans found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Membership;
