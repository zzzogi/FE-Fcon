import React, { useState, useEffect } from "react";
import axios from "axios";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import FilterSide from "../../../components/user/FilterSide/FilterSide";
import ProjectCardView from "../../../components/user/ProjectCardView/ProjectCardView";
import "./Project.css";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(
          `https://api-be.fieldy.online/api/Post/getAllPosts`
        );
        if (response.data.success) {
          const filteredByType = response.data.data.filter(
            (project) => project.postTypeId === 1
          );

          const locations = ["Hà Nội", "Đà Nẵng", "Hồ Chí Minh", "Hải Phòng", "Japan", "Thủ Đức", "Hòa Lạc"];
          const projectsWithLocations = filteredByType.map((project, index) => ({
            ...project,
            position: locations[index % locations.length],
          }));

          setProjects(projectsWithLocations);
          setFilteredProjects(projectsWithLocations);
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

  const handleFilterChange = (selectedFilters) => {
    let newFilteredProjects = [...projects];

    // Filter by locations
    if (selectedFilters.locations.length > 0) {
      newFilteredProjects = newFilteredProjects.filter((project) =>
        selectedFilters.locations.includes(project.position)
      );
    }

    // Filter by price range
    if (selectedFilters.priceRange) {
      const { minPrice, maxPrice } = selectedFilters.priceRange;
      newFilteredProjects = newFilteredProjects.filter((project) => {
        const price = parseFloat(project.budgetOrSalary);
        return price >= minPrice && price <= maxPrice;
      });
    }

    setFilteredProjects(newFilteredProjects);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value) {
      const searchedProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProjects(searchedProjects);
    } else {
      setFilteredProjects(projects);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="Project">
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Blog List" page="Blog" />
        </div>
      </div>

      <div className="section-dev-list">
        <div className="container">
          <div className="main-flex">
            <div className="filter-side">
              <FilterSide onFilterChange={handleFilterChange} />
            </div>

            <div className="dev-list">
              <div className="dev-list-filter">
                <input
                  type="text"
                  placeholder="Search blog..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-bar"
                />
                <span>Found {filteredProjects.length} Results</span>
              </div>

              <div className="project-list">
                {filteredProjects.length > 0 ? (
                  filteredProjects.map((project) => (
                    <ProjectCardView
                      key={project.postId}
                      infomation={{
                        id: project.postId,
                        name: project.title,
                        position: project.position,
                        tags: project.skills.split(", "),
                        salary: `$${project.budgetOrSalary}`,
                        avatar: project.imgUrl,
                      }}
                    />
                  ))
                ) : (
                  <p>No projects found based on your filters.</p>
                )}
              </div>

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
