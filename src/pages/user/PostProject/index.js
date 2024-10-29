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

// import clsx from "clsx";

// const PostProject = () => {
//   const { register, handleSubmit, control, watch } = useForm();
//   const budget = watch("budget");

//   const onSubmit = async (data) => {
//     const userId = 7; // Hardcoded userId
//     const postTypeId = 1; // Hardcoded postTypeId

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
//       imgUrl : "",
//     };

//     try {
//       const response = await fetch("https://api-be.fieldy.online/api/Post/AddNewPost", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6ImFjY3Rlc3QiLCJyb2xlIjoic3RyaW5nIiwibmJmIjoxNzI5MTUzMTI5LCJleHAiOjE3MjkxNTY3MjksImlhdCI6MTcyOTE1MzEyOX0.bU1CYXkYiVjYLfU5qGD28t0wO1mhtz8d0ko06TAzgWo', // Replace wdaith the actual token if necessary
//         },
//         body: JSON.stringify(postData),
//       });

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
//               <form onSubmit={handleSubmit(onSubmit)}> {/* Handle form submit correctly */}
//                 <div className="title-box widget-box">
//                   <div className="row">
//                     <div className="col-lg-12">
//                       <h4>Basic Details</h4>
//                     </div>
//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Project Title</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           {...register("project_title", { required: true })} // Add validation if needed
//                         />
//                       </div>
//                     </div>

//                     <div className="col-lg-4 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Project Duration</label>
//                         <select className="form-control select">
//                           <option>1-3 Week</option>
//                           <option>1 Month</option>
//                           <option>Less than a month</option>
//                           <option>More than a month</option>
//                         </select>
//                       </div>
//                     </div>

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

//                     <div className="col-lg-6 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Freelancer Level</label>
//                         <select className="form-control select">
//                           <option>Basic</option>
//                           <option>Intermediate</option>
//                           <option>Professional</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Tags</label>
//                         <input type="text" className="form-control" />
//                       </div>
//                     </div>

//                     <div className="col-lg-12 col-md-12">
//                       <div className="title-content p-0">
//                         <div className="title-detail">
//                           <h4>Skill Set</h4>
//                           <div className="mb-3">
//                             <input
//                               type="text"
//                               className="input-tags form-control"
//                               id="services"
//                               placeholder="UX, UI, App Design, Wireframing, Branding"
//                               {...register("skill_sets", { required: true })} // Add validation if needed
//                             />
//                             <p className="text-muted mb-0">
//                               Enter skills needed for the project, for best results add 5 or more skills.
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="col-lg-12 my-3">
//                       <h4>Budget</h4>
//                     </div>
//                     <div className="col-lg-6 col-md-12">
//                           <div className="mb-3">
//                             <label className="focus-label">Enter Price ($)</label>
//                             <input type="text" className="form-control" placeholder="15" {...register("price", { required: true })} />
//                           </div>
//                         </div>
//                     <div className="col-lg-12 col-md-12">
//                       <div className="mb-3">
//                         <label className="focus-label">Description</label>
//                         <textarea
//                           className="form-control"
//                           rows="5"
//                           placeholder="Place project descriptions"
//                           {...register("description")}
//                         ></textarea>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <button type="submit" className="btn btn-outline-danger btn-block">Post Project</button>
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
import React from "react";
import "./layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CheckSuccess from "../../../assets/images/icon/check-success.svg";
import Hourly from "../../../assets/images/icon/hourly.svg";
import Fixed from "../../../assets/images/icon/fixed.svg";

// Import useForm from react-hook-form
import { useForm } from "react-hook-form";

// Import toast and ToastContainer from react-toastify for notifications
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import js-cookie for managing cookies
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

      const result = await response.json();
      console.log("Post API response:", result); // Log the response

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
                {/* Handle form submit correctly */}
                <div className="title-box widget-box">
                  <div className="row">
                    <div className="col-lg-12">
                      <h4>Basic Details</h4>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Project Title</label>
                        <input
                          type="text"
                          className="form-control"
                          {...register("project_title", { required: true })} // Add validation if needed
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Project Duration</label>
                        <select className="form-control select">
                          <option>1-3 Week</option>
                          <option>1 Month</option>
                          <option>Less than a month</option>
                          <option>More than a month</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className="mb-3">
                        <label className="focus-label">Deadline Date</label>
                        <div className="cal-icon">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Choose"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Freelancer Level</label>
                        <select className="form-control select">
                          <option>Basic</option>
                          <option>Intermediate</option>
                          <option>Professional</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Tags</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>

                    <div className="col-lg-12 col-md-12">
                      <div className="title-content p-0">
                        <div className="title-detail">
                          <h4>Skill Set</h4>
                          <div className="mb-3">
                            <input
                              type="text"
                              className="input-tags form-control"
                              id="services"
                              placeholder="UX, UI, App Design, Wireframing, Branding"
                              {...register("skill_sets", { required: true })} // Add validation if needed
                            />
                            <p className="text-muted mb-0">
                              Enter skills needed for the project, for best
                              results add 5 or more skills.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-12 my-3">
                      <h4>Budget</h4>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Enter Price ($)</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="15"
                          {...register("price", { required: true })}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12">
                      <div className="mb-3">
                        <label className="focus-label">Description</label>
                        <textarea
                          className="form-control"
                          rows="5"
                          placeholder="Place project descriptions"
                          {...register("description")}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-danger btn-block"
                >
                  Post Project
                </button>
              </form>
              {/* Include the ToastContainer for showing notifications */}
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostProject;
