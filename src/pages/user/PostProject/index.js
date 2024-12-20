// // export default PostProject;
// import React from "react";
// import "./layout.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import CheckSuccess from "../../../assets/images/icon/check-success.svg";
// import Hourly from "../../../assets/images/icon/hourly.svg";
// import Fixed from "../../../assets/images/icon/fixed.svg";

// // Import useForm from react-hook-form
// import { useForm } from "react-hook-form";

// // Import toast and ToastContainer from react-toastify for notifications
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// // Import js-cookie for managing cookies
// import Cookies from "js-cookie";

// const PostProject = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   <input
//     type="text"
//     className={`form-control ${errors.project_title ? "is-invalid" : ""}`}
//     {...register("project_title", { required: "Project title is required" })}
//   />;
//   {
//     errors.project_title && (
//       <div className="invalid-feedback">{errors.project_title.message}</div>
//     );
//   }

//   const apiUrl = process.env.REACT_APP_API_URL;

//   const onSubmit = async (data) => {
//     const userId = Cookies.get("userId"); // Hardcoded userId for now

//     let postTypeId = 0; // Hardcoded postTypeId
//     const userType = Cookies.get("userType");
//     console.log(userType);
//     if (userType && userType === "freelancer") {
//       postTypeId = 1; //
//       console.log(userType);
//     }
//     if (userType && userType === "company") {
//       postTypeId = 2; //
//       console.log(userType);
//     }

//     const token = Cookies.get("token"); // Get the token from cookies

//     if (!token) {
//       toast("Please login befor create post !!.", {
//         type: "error",
//         position: "top-center",
//       });
//       return;
//     }

//     const postData = {
//       userId: userId,
//       postTypeId: postTypeId,
//       title: data.project_title,
//       description: data.description, // Ensure you get the value from the textarea
//       budgetOrSalary: data.price, // Set budget or salary based on selection
//       skills: data.skill_sets,
//       status: "active", // Set this as per your business logic
//       createdAt: new Date().toISOString(), // Current date in ISO format
//       updatedAt: new Date().toISOString(), // Current date in ISO format
//       imgUrl: "",
//     };

//     try {
//       const response = await fetch(
//         `https://api-be.fieldy.online/api/Post/AddNewPost`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`, // Use the token retrieved from cookies
//           },
//           body: JSON.stringify(postData),
//         }
//       );

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Post API response:", result); // Log the response

//       if (result.success) {
//         toast("Post created successfully!", {
//           type: "success",
//           position: "top-center",
//         });
//       } else {
//         toast("Failed to create post: " + result.message, {
//           type: "error",
//           position: "top-center",
//         });
//       }
//     } catch (error) {
//       console.error("Error creating post:", error);
//       toast("An error occurred while creating the post.", {
//         type: "error",
//         position: "top-center",
//       });
//     }
//   };

//   return (
//     <div className="content">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="select-project mb-4">
//               <form onSubmit={handleSubmit(onSubmit)}>
//                 {/* Handle form submit correctly */}
//                 <div className="title-box widget-box">
//                   <div className="row">
//                     <div className="col-lg-12 mt-4">
//                       <h4
//                         style={{
//                           fontWeight: 900,
//                         }}
//                       >
//                         Basic Details
//                       </h4>
//                     </div>
//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Title</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           {...register("project_title", { required: true })} // Add validation if needed
//                         />
//                       </div>
//                     </div>

//                     {/* <div className="col-lg-4 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Project Duration</label>
//                         <select className="form-control select">
//                           <option>1-3 Week</option>
//                           <option>1 Month</option>
//                           <option>Less than a month</option>
//                           <option>More than a month</option>
//                         </select>
//                       </div>
//                     </div> */}

//                     <div className="col-lg-4 col-md-6">
//                       <div className="mb-3">
//                         <label className="focus-label">Deadline Date</label>
//                         <div className="cal-icon">
//                           <input
//                             type="date"
//                             className="form-control"
//                             placeholder="Choose"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* <div className="col-lg-6 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Freelancer Level</label>
//                         <select className="form-control select">
//                           <option>Basic</option>
//                           <option>Intermediate</option>
//                           <option>Professional</option>
//                         </select>
//                       </div>
//                     </div> */}

//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Tags</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>

//                     <div className="col-lg-12 col-md-12 mt-4">
//                       <div className="title-content p-0">
//                         <div className="title-detail">
//                           <h4
//                             style={{
//                               fontWeight: 900,
//                             }}
//                           >
//                             Skill Set
//                           </h4>
//                           <div className="mb-3">
//                             <input
//                               type="text"
//                               className="input-tags form-control"
//                               id="services"
//                               placeholder="UX, UI, App Design, Wireframing, Branding"
//                               {...register("skill_sets", { required: true })} // Add validation if needed
//                             />
//                             <p
//                               className="text-muted mb-0 mt-1"
//                               style={{
//                                 fontSize: 12,
//                                 fontStyle: "italic",
//                               }}
//                             >
//                               Enter skills needed for the project, for best
//                               results add 5 or more skills.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-lg-12 mt-5">
//                       <h4
//                         style={{
//                           fontWeight: 900,
//                         }}
//                       >
//                         Budget
//                       </h4>
//                     </div>
//                     <div className="col-lg-6 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Enter Price (VND)</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="15"
//                           {...register("price", { required: true })}
//                         />
//                       </div>
//                     </div>
//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Description</label>
//                         <textarea
//                           className="form-control"
//                           rows="5"
//                           placeholder="Place project descriptions and also give your contact information"
//                           {...register("description")}
//                         ></textarea>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn btn-outline-danger btn-block"
//                 >
//                   Create Post
//                 </button>
//               </form>
//               {/* Include the ToastContainer for showing notifications */}
//               <ToastContainer />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PostProject;

// export default PostProject;
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./layout.css";

// Import useForm from react-hook-form
import { useForm } from "react-hook-form";

// Import toast and ToastContainer from react-toastify for notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import js-cookie for managing cookies
import Cookies from "js-cookie";

const PostProject = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const apiUrl = process.env.REACT_APP_API_URL;

  const userId = Cookies.get("userId"); // Hardcoded userId for now

  let postTypeId = 0; // Hardcoded postTypeId
  const userType = Cookies.get("userType");
  console.log(userType);
  if (userType && userType === "freelancer") {
    postTypeId = 1; //
    console.log(userType);
  }
  if (userType && userType === "company") {
    postTypeId = 2; //
    console.log(userType);
  }

  const token = Cookies.get("token"); // Get the token from cookies

  const onSubmit = async (data) => {
    if (!token) {
      toast("Please login before creating a post!", {
        type: "error",
        position: "top-center",
      });
      return;
    }

    const postData = {
      userId: userId,
      postTypeId: postTypeId,
      title: data.project_title,
      description: data.description,
      budgetOrSalary: data.price,
      skills: data.skill_sets,
      status: "active",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      imgUrl: "",
      // contactInfo: data.contactInfo,
      // email: data.email,
    };

    try {
      const response = await fetch(
        `https://api-be.fieldy.online/api/Post/AddNewPost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(postData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Post API response:", result);

      if (result.success) {
        toast("Post created successfully!", {
          type: "success",
          position: "top-center",
        });
      } else {
        toast("Failed to create post: " + result.message, {
          type: "error",
          position: "top-center",
        });
      }
    } catch (error) {
      console.error("Error creating post:", error);
      toast("An error occurred while creating the post.", {
        type: "error",
        position: "top-center",
      });
    }
  };

  return (
    <div className="content">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="select-project mb-4">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title-box widget-box">
                  <div className="row">
                    <div className="col-lg-12 mt-4">
                      <h4 style={{ fontWeight: 900 }}>Basic Details</h4>
                    </div>
                    <div
                      className={`${
                        userType === "freelancer" ? "col-lg-6" : "col-lg-4"
                      }`}
                    >
                      <div className="mb-3">
                        <label className="focus-label">Title</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.project_title ? "is-invalid" : ""
                          }`}
                          {...register("project_title", {
                            required: "Project title is required",
                          })}
                        />
                        {errors.project_title && (
                          <div className="invalid-feedback">
                            {errors.project_title.message}
                          </div>
                        )}
                      </div>
                    </div>

                    <div
                      className={`${
                        userType === "freelancer" ? "col-lg-6" : "col-lg-4"
                      }`}
                    >
                      <div className="mb-3">
                        <label className="focus-label">Tags</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.tags ? "is-invalid" : ""
                          }`}
                          {...register("tags", {
                            required: "Tags are required",
                          })}
                        />
                        {errors.tags && (
                          <div className="invalid-feedback">
                            {errors.tags.message}
                          </div>
                        )}
                      </div>
                    </div>

                    {userType !== "freelancer" ? (
                      <div className="col-lg-4">
                        <div className="mb-3">
                          <label className="focus-label">Deadline Date</label>
                          <div className="cal-icon">
                            <input
                              type="date"
                              className={`form-control ${
                                errors.deadline ? "is-invalid" : ""
                              }`}
                              {...register("deadline", {
                                required:
                                  userType !== "freelancer"
                                    ? "Deadline are required"
                                    : false,
                              })}
                              defaultValue={new Date().toDateString()}
                            />
                            {errors.deadline && (
                              <div className="invalid-feedback">
                                {errors.deadline.message}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null}

                    <div className="col-lg-12 col-md-12 mt-4">
                      <div className="title-content p-0">
                        <div className="title-detail">
                          <h4 style={{ fontWeight: 900 }}>Skill Set</h4>
                          <div className="mb-3">
                            <input
                              type="text"
                              className={`input-tags form-control ${
                                errors.skill_sets ? "is-invalid" : ""
                              }`}
                              id="services"
                              placeholder="UX, UI, App Design, Wireframing, Branding"
                              {...register("skill_sets", {
                                required: "Skills are required",
                              })}
                            />
                            {errors.skill_sets && (
                              <div className="invalid-feedback">
                                {errors.skill_sets.message}
                              </div>
                            )}
                            <p
                              className="text-muted mb-0 mt-1"
                              style={{
                                fontSize: 12,
                                fontStyle: "italic",
                              }}
                            >
                              Enter skills needed for the project, for best
                              results add 5 or more skills.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-lg-12 mt-5">
                      <h4 style={{ fontWeight: 900 }}>Contact</h4>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="focus-label">Phone number</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.contactInfo ? "is-invalid" : ""
                          }`}
                          {...register("contactInfo", {
                            required: "Phone number is required",
                          })}
                        />
                        {errors.contactInfo && (
                          <div className="invalid-feedback">
                            {errors.contactInfo.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label className="focus-label">Email</label>
                        <input
                          type="text"
                          className={`form-control ${
                            errors.email ? "is-invalid" : ""
                          }`}
                          {...register("email", {
                            required: "Email is required",
                          })}
                        />
                        {errors.email && (
                          <div className="invalid-feedback">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div> */}

                    <div className="col-lg-12 mt-5">
                      <h4 style={{ fontWeight: 900 }}>
                        {userType !== "freelancer" ? "Budget" : "More Info"}
                      </h4>
                    </div>
                    {userType !== "freelancer" ? (
                      <div className="col-lg-6 col-md-12">
                        <div className="mb-3">
                          <label className="focus-label">
                            Enter Price (VND)
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              errors.price ? "is-invalid" : ""
                            }`}
                            placeholder="15"
                            {...register("price", {
                              required:
                                userType !== "freelancer"
                                  ? "Price are required"
                                  : false,
                            })}
                            defaultValue={0}
                          />
                          {errors.price && (
                            <div className="invalid-feedback">
                              {errors.price.message}
                            </div>
                          )}
                        </div>
                      </div>
                    ) : null}
                    <div className="col-lg-12 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">
                          Description and Contact
                        </label>
                        <textarea
                          className={`form-control ${
                            errors.description ? "is-invalid" : ""
                          }`}
                          rows="5"
                          placeholder="Place project descriptions and also give your contact information"
                          {...register("description", {
                            required: "Description is required",
                          })}
                        ></textarea>
                        {errors.description && (
                          <div className="invalid-feedback">
                            {errors.description.message}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-block"
                >
                  Create Post
                </button>
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
