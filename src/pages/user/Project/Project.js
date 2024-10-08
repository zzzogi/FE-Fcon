// import React ,{ useState, useEffect } from "react";
// import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
// import Ava1 from "../../../assets/images/company/img-1.png";
// import Ava2 from "../../../assets/images/company/img-2.png";
// import Ava3 from "../../../assets/images/company/img-3.png";
// import Ava4 from "../../../assets/images/company/img-4.png";
// import Ava5 from "../../../assets/images/company/img-5.png";
// import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
// import FilterSide from "../../../components/user/FilterSide/FilterSide";
// import "./Project.css";
// import ProjectCardView from "../../../components/user/ProjectCardView/ProjectCardView";
// import axios from "axios";


// const Project = () => {
//   const developers = [
//     {
//       name: "Amaze Tech",
//       position: "Full-Time ",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava1,
//     },
//     {
//       name: "Park INC",
//       position: "Part-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava2,
//     },
//     {
//       name: "Tech Zone",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava3,
//     },
//     {
//       name: "ABC Software ",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava4,
//     },
//     {
//       name: "Alfred Tech",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava5,
//     },
//     {
//       name: "Kind Software's",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava5,
//     },
//     {
//       name: "ABC Software ",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava4,
//     },
//     {
//       name: "Alfred Tech",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava5,
//     },
//     {
//       name: "Kind Software's",
//       position: "Full-Time",
//       vote: 5,
//       tags: ["HTML", "CSS", "Javascript"],
//       salary: "$40 - $500",
//       avatar: Ava5,
//     },
//   ];

//   const options = [
//     { value: "option0", label: "All" },
//     { value: "option1", label: "Popular" },
//     { value: "option2", label: "Relevance" },
//     { value: "option3", label: "Rating" },
//     { value: "option4", label: "Lastest" },
//     { value: "option5", label: "Free" },
//   ];

//   return (
    
//     <div className="Project">
//       {/* Bread crumb and current router */}
//       <div className="section-bread-crumb">
//         <div className="container">
//           <BreadCrumb title="Project Grid" page="Project" />
//         </div>
//       </div>

//       <div className="section-dev-list">
//         <div className="container">
//           <div className="main-flex">
//             {/* Filter sidebar */}
//             <div className="filter-side">
//               <FilterSide />
//             </div>
//             <div className="dev-list">
//               {/* Filter-top */}
//               <div className="dev-list-filter">
//                 <span>Found 9 Results</span>
//                 <CustomSelect options={options} placeholder="Sort By" />
//               </div>

//               {/* List-render */}
//               <div className="dev-list-inner">
//                 {developers.map((dev, index) => {
//                   return (
//                     <div className="dev-card" key={dev.name + "_" + index}>
//                       <ProjectCardView infomation={dev} />
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Navigator */}
//               <div className="dev-list-navigator">
//                 <div className="arrow arrow-left">
//                   <i class="bi bi-chevron-left"></i>
//                 </div>
//                 <div className="number-page page-actived">1</div>
//                 <div className="number-page">2</div>
//                 <div className="number-page">3</div>
//                 <div className="number-page dot-summary">...</div>
//                 <div className="number-page">20</div>
//                 <div className="arrow arrow-right">
//                   <i class="bi bi-chevron-right"></i>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Project;
import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
import FilterSide from "../../../components/user/FilterSide/FilterSide";
import ProjectCardView from "../../../components/user/ProjectCardView/ProjectCardView";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = [
    { value: "option0", label: "All" },
    { value: "option1", label: "Popular" },
    { value: "option2", label: "Relevance" },
    { value: "option3", label: "Rating" },
    { value: "option4", label: "Latest" },
    { value: "option5", label: "Free" },
  ];

  // Fetching data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5052/api/Post/getAllPosts"); // Replace with your actual API endpoint
        if (response.data.success) {
          setProjects(response.data.data);
        } else {
          setError("Failed to load projects.");
        }
      } catch (err) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="Project">
      {/* Bread crumb and current router */}
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Project Grid" page="Project" />
        </div>
      </div>

      <div className="section-dev-list">
        <div className="container">
          <div className="main-flex">
            {/* Filter sidebar */}
            <div className="filter-side">
              <FilterSide />
            </div>
            <div className="dev-list">
              {/* Filter-top */}
              <div className="dev-list-filter">
                <span>Found {projects.length} Results</span>
                <CustomSelect options={options} placeholder="Sort By" />
              </div>

              {/* List-render */}
              <div className="dev-list-inner">
                {projects.map((project, index) => (
                  <div className="dev-card" key={project.postId}>
                    <ProjectCardView
                      infomation={{
                        name: project.title,
                        position: project.status === "open" ? "Open" : "Closed",
                        vote: 5, // Dummy data as no vote in API
                        tags: project.skills.split(", "), // Convert skills string to array
                        salary: `$${project.budgetOrSalary}`,
                        avatar: `https://placehold.co/100x100?text=ID-${project.postId}`, // Dummy avatar
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigator */}
              <div className="dev-list-navigator">
                <div className="arrow arrow-left">
                  <i className="bi bi-chevron-left"></i>
                </div>
                <div className="number-page page-actived">1</div>
                <div className="number-page">2</div>
                <div className="number-page">3</div>
                <div className="number-page dot-summary">...</div>
                <div className="number-page">20</div>
                <div className="arrow arrow-right">
                  <i className="bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
