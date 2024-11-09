import React, { useState, useEffect } from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePicture from "./components/ProfilePicture";
import Cookies from "js-cookie";
/* 
{

"userId": 3,
"username": "hashvalue2", ediable
"email": "user2@example.com", not ediable
"passwordHash": "passwordhash2",
"userType": "member", not ediable
"contactInfo": "User 2 Contact Info", ediable
"createdAt": "2024-10-14T05:35:19.843", not ediable
"updatedAt": "2024-10-14T05:35:19.843",
"numberJobDone": 3, not ediable
"location": "Location 2", ediable
"deliveryTime": "Intermediate", ediable
"languageLevel": "Beginner", ediable
"imgUr1": "\"C:\\Users\\ASUS\\Pictures\\Saved Pictures\\08b3acb24ced8ab3d3fc1.jpg\"", ediable
"memberships": [], not ediable
"posts": [], not ediable
"reviewReviewees": [], not ediable
"reviewReviewers": [] not ediable
},

{
  "userId": 36,
  "username": "acctest3",
  "email": "acctest3",
  "passwordHash": null,
  "userType": "admin",
  "contactInfo": "random",
  "createdAt": "2024-10-29T14:37:22.557",
  "updatedAt": "2024-10-31T15:32:19.43",
  "numberJobDone": 0,
  "location": "string",
  "deliveryTime": "string",
  "languageLevel": "string",
  "imgUrl": "string",
  "memberships": [],
  "posts": [],
  "reviewReviewees": [],
  "reviewReviewers": []
}

**/

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

const UserSetting = () => {
  const [currentUser, setCurrentUser] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, control, watch } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    toast("Hiện tại không thể cập nhật thông tin người dùng", {
      type: "info",
      position: "top-center",
    });
  };
  const token = Cookies.get("token");

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api-be.fieldy.online/api/User/getCurrentUser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            accept: "*/*",
          },
        }
      );

      if (response.ok) {
        const result = await response.json();

        setCurrentUser(result);
      } else {
        console.log("Failed to fetch current user");
      }
    };

    fetchUser();
  }, [token]);

  console.log(currentUser);
  return (
    <>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="User Settings" page="User Settings" />
        </div>
      </div>
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="select-project mb-4">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div class="title-box widget-box">
                    <div class="row">
                      <div class="row col-lg-4">
                        <ProfilePicture register={register} />
                      </div>
                      <div class="row col-lg-8">
                        <div class="col-lg-4 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">User name</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("username")}
                              value={currentUser?.username || ""}
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">User type</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("userType")}
                              disabled
                              value={currentUser?.userType || ""}
                            />
                          </div>
                        </div>
                        <div class="col-lg-4 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Password</label>
                            <input
                              type={showPassword ? "password" : "text"}
                              class="form-control"
                              {...register("passwordHash")}
                              value={currentUser?.passwordHash || ""}
                              disabled
                            />
                            {/* <input
                              type="checkbox"
                              onClick={() => {
                                setShowPassword((state) => !state);
                              }}
                            />
                            Show Password */}
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Email</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("email")}
                              value={currentUser?.email || ""}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Address</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("location")}
                              value={currentUser?.location || ""}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Language Level</label>
                            <select
                              class="form-control select"
                              {...register("languageLevel")}
                              value={currentUser?.languageLevel || ""}
                            >
                              <option value="0">Beginner</option>
                              <option value="1">Intermediate</option>
                              <option value="2">Advanced</option>
                              <option value="3">Expert</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Delivery Time</label>
                            <select
                              class="form-control select"
                              {...register("deliveryTime")}
                              value={currentUser?.deliveryTime || ""}
                            >
                              <option value="0">Beginner</option>
                              <option value="1">Intermediate</option>
                              <option value="2">Advanced</option>
                              <option value="3">Expert</option>
                            </select>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Contact Info</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("contactInfo")}
                              value={currentUser?.contactInfo || ""}
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12 mb-4">
                          <div class="mb-3">
                            <label class="focus-label">Created Date</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("createdAt")}
                              disabled
                              value={convertDate(currentUser?.createdAt) || ""}
                            />
                          </div>
                        </div>
                        {/* <div class="col-lg-12">
                          <h4>Thông số của tài khoản</h4>
                        </div>
                        <div class="col-lg-6 col-md-12 mb-4 d-flex flex-column gap-4">
                          <p class="focus-label">Number of jobs done: 3</p>
                          <p class="focus-label">Membership: Package 2</p>
                          <p class="focus-label">Number of posts: 1</p>
                          <p class="focus-label">Number of reviews: 2</p>
                          <p class="focus-label">Number of your reviews: 4</p>
                        </div> */}
                      </div>
                      <div class="row">
                        <div class="col-md-12 text-end">
                          <button type="submit" class="btn btn-primary">
                            Cập nhật thông tin
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserSetting;
