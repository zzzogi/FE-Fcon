import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckSuccess from "../../../assets/images/icon/check-success.svg";
import Hourly from "../../../assets/images/icon/hourly.svg";
import Fixed from "../../../assets/images/icon/fixed.svg";
import { useForm } from "react-hook-form";
import Documents from "./components/Documents";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";

const PostProject = () => {
  const { register, handleSubmit, watch } = useForm();
  const apiUrl = process.env.REACT_APP_API_URL;

  const onSubmit = async (data) => {
    const userId = Cookies.get("userId"); // Hardcoded userId for now
    const postTypeId = 2; // Hardcoded postTypeId

    const token = Cookies.get("token"); // Get the token from cookies

    if (!token) {
      toast("Please login befor create post !!.", {
        type: "error",
        position: "top-center",
      });
      return;
    }
    // if (!userId) {
    //   toast("No userID found, please login again.", {
    //     type: "error",
    //     position: "top-center",
    //   });
    //   return;
    // }

    const postData = {
      userId: userId,
      postTypeId: postTypeId,
      title: data.project_title,
      description: data.description, // Ensure you get the value from the textarea
      budgetOrSalary: data.price, // Set budget or salary based on selection
      skills: data.skill_sets,
      status: "active", // Set this as per your business logic
      createdAt: new Date().toISOString(), // Current date in ISO format
      updatedAt: new Date().toISOString(), // Current date in ISO format
      imgUrl: "",
    };

    try {
      const response = await fetch(
        `https://api-be.fieldy.online/api/Post/AddNewPost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Use the token retrieved from cookies
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
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
                    <div class="col-lg-12">
                      <h4>Basic Details</h4>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Project Title</label>
                        <input
                          type="text"
                          class="form-control"
                          {...register("project_title")}
                        />
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Project Category</label>
                        <select
                          class="form-control select"
                          {...register("project_category")}
                        >
                          <option value="0">Select</option>
                          <option value="1">Category</option>
                          <option value="2">Project</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Project Duration</label>
                        <select
                          class="form-control select"
                          {...register("project_duration")}
                        >
                          <option>1-3 Week</option>
                          <option>1 Month</option>
                          <option>Less then a month</option>
                          <option>More then a month</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                      <div class="mb-3">
                        <label class="focus-label">Deadline Date</label>
                        <div class="cal-icon">
                          <input
                            type="date"
                            class="form-control "
                            placeholder="Choose"
                            {...register("deadline_date")}
                          />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Freelancer Type</label>
                        <select
                          class="form-control "
                          {...register("freelancer_type")}
                        >
                          <option value="0">Select</option>
                          <option value="1">Full Time</option>
                          <option value="2">Part Time</option>
                          <option value="3">Project Based</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Freelancer Level</label>
                        <select
                          class="form-control select"
                          {...register("freelancer_level")}
                        >
                          <option>Basic</option>
                          <option>Intermediate</option>
                          <option>Professional</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Tags</label>
                        <input
                          type="text"
                          class="form-control"
                          {...register("tags")}
                        />
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12">
                      <div class="title-content p-0">
                        <div class="title-detail">
                          <h4>Skill Set</h4>
                          <div class="mb-3">
                            <input
                              type="text"
                              class="input-tags form-control"
                              id="services"
                              placeholder="UX, UI, App Design, Wireframing, Branding"
                              {...register("skill_sets")}
                              onKeyDown={(e) => {}}
                            />

                            <p className="text-muted mb-0">
                              Enter skills needed for the project, for best
                              results add 5 or more skills.

                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 my-3">
                      <h4>Budget</h4>
                    </div>
                    <div class="buget-img">
                      <ul>
                        <li>
                          <div
                            class={clsx(
                              `hours-rate ${
                                budget === "hourly_rate" ? "active" : null
                              }`
                            )}
                          >
                            <div class="hours-rate-img">
                              <label class="customize-radio">
                                <input
                                  type="radio"
                                  name="fixed"
                                  {...register("budget")}
                                  value="hourly_rate"
                                />
                                <img
                                  src={CheckSuccess}
                                  alt="img"
                                  class="success-check"
                                />
                                <img src={Hourly} alt="img" />
                                <span class="d-block">Hourly Rate</span>
                              </label>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div
                            class={clsx(
                              `fixed-rate ${
                                budget === "fixed_rate" ? "active" : null
                              }`
                            )}
                          >
                            <div class="hours-rate-img">
                              <label class="customize-radio">
                                <input
                                  type="radio"
                                  name="fixed"
                                  {...register("budget")}
                                  value="fixed_rate"
                                />
                                <img
                                  src={CheckSuccess}
                                  alt="img"
                                  class="success-check"
                                />
                                <img src={Fixed} alt="img" />
                                <span class="d-block">Fixed budget</span>
                              </label>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      class={clsx(
                        `hours-rates ${
                          budget === "hourly_rate" ? "d-block" : "d-none"
                        }`
                      )}
                    >
                      <div class="row">
                        <div class="col-lg-3 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">From ($)</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="15"
                              {...register("price_from")}
                            />
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="mb-3">
                            <label class="focus-label">To ($)</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="250"
                              {...register("price_to")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class={clsx(
                        `fixed-rates ${
                          budget === "fixed_rate" ? "d-block" : "d-none"
                        }`
                      )}
                    >
                      <div class="row">
                        <div class="col-lg-6 col-md-12">
                          <div class="mb-3">
                            <label class="focus-label">Enter Price ($)</label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="15"
                              {...register("price")}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-12 my-3">
                      <h4>Attachment</h4>
                      <p>
                        You can attach more than 1 files to 10 files, Size of
                        the Document should be Below 2MB
                      </p>
                    </div>
                    <div class="col-lg-12">
                      <Documents control={control} />
                    </div>
                    <div class="col-lg-12 my-3">
                      <h4>Other Requirement</h4>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Languages</label>
                        <input
                          type="text"
                          class="form-control"
                          {...register("languages")}
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="mb-3">
                        <label class="focus-label">Language Fluency</label>
                        <select
                          class="form-control select"
                          {...register("language_fluency")}
                        >
                          <option>Basic</option>
                          <option>Intermediate</option>
                          <option>Professional</option>
                        </select>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label class="focus-label">
                          Write Description of Projects
                        </label>
                        <textarea class="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-end">
                      <div class="btn-item">
                        <button type="submit" class="btn next-btn">
                          Post a Job
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
  );
};

export default PostProject;
