import React, { useState } from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "bootstrap/dist/css/bootstrap.min.css";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePicture from "./components/ProfilePicture";

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

**/

const UserSetting = () => {
  const { register, handleSubmit, control, watch } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (data) => {
    console.log(data);
  };
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
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    toast("Đăng thành công, bài của bạn sẽ sớm được duyệt!", {
                      type: "success",
                      position: "top-center",
                    });
                    handleSubmit(onSubmit);
                  }}
                >
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
                              {...register("user_name")}
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
                            />
                            <input
                              type="checkbox"
                              onClick={() => {
                                setShowPassword((state) => !state);
                              }}
                            />
                            Show Password
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Email</label>
                            <input
                              type="text"
                              class="form-control"
                              {...register("email")}
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
                            />
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Language Level</label>
                            <select
                              class="form-control select"
                              {...register("languageLevel")}
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
                          <div class="btn-item">
                            <button type="submit" class="btn next-btn">
                              Cập nhật thông tin
                            </button>
                          </div>
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
