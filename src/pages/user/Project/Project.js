
import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
import FilterSide from "../../../components/user/FilterSide/FilterSide";
import ProjectCardView from "../../../components/user/ProjectCardView/ProjectCardView";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]); // All projects
  const [filteredProjects, setFilteredProjects] = useState([]); // Filtered projects
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:5052/api/Post/getAllPosts"); // Replace with your actual API endpoint
        if (response.data.success) {
          setProjects(response.data.data);
          setFilteredProjects(response.data.data); // Initially, all projects are displayed
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

  // Handle filter change
  const handleFilterChange = (selectedFilters) => {
    let newFilteredProjects = projects;

    // Filter by locations
    if (selectedFilters.locations.length > 0) {
      newFilteredProjects = newFilteredProjects.filter((project) =>
        selectedFilters.locations.includes(project.location) // Adjust based on your API response
      );
    }

    // Filter by skills
    if (selectedFilters.skills.length > 0) {
      newFilteredProjects = newFilteredProjects.filter((project) =>
        selectedFilters.skills.some((skill) => project.skills.includes(skill)) // Adjust based on your API response
      );
    }

    // Filter by categories
    if (selectedFilters.categories.length > 0) {
      newFilteredProjects = newFilteredProjects.filter((project) =>
        selectedFilters.categories.includes(project.title) // Adjust based on your API response
      );
    }

    // If no filters are selected, show all projects
    if (
      selectedFilters.locations.length === 0 &&
      selectedFilters.skills.length === 0 &&
      selectedFilters.categories.length === 0
    ) {
      newFilteredProjects = projects;
    }

    setFilteredProjects(newFilteredProjects);
  };

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
              <FilterSide onFilterChange={handleFilterChange} />
            </div>
            <div className="dev-list">
              {/* Filter-top */}
              <div className="dev-list-filter">
                <span>Found {filteredProjects.length} Results</span>
              </div>

              {/* List-render */}
              <div className="dev-list-inner">
                {filteredProjects.map((project, index) => (
                  <div className="dev-card" key={project.postId}>
                    <ProjectCardView
                      infomation={{
                        name: project.title,
                        position: project.status === "open" ? "Open" : "Closed",
                        vote: 5, // Dummy data as no vote in API
                        lastest: project.createdAt,
                        tags: project.skills.split(", "), // Convert skills string to array
                        salary: `$${project.budgetOrSalary}`,
                        avatar: `https://randomuser.me/api/portraits/${index % 2 === 0 ? "men" : "women"}/${index}.jpg`, // Random avatar
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
