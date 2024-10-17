import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "../MyProfile/layout.css";
import ChipList from "../MyProfile/components/Chip";
import Attachments from "../MyProfile/components/Attachments";
import Detail from "../MyProfile/components/Detail";
import Reviews from "../MyProfile/components/Reviews";
import Sidebar from "../MyProfile/components/Sidebar";
import axios from "axios";

export const ProjectDetail = () => {
  const { id } = useParams(); // Get project ID from URL
  const [projectData, setProjectData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch project details by ID
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://103.179.184.83:7979/api/Post/getById/${id}`);        
        console.log("Fetched project data:", response.data); // Log the project data for debugging
        setProjectData(response.data.data); // Ensure we are setting the correct structure (response.data.data)
      } catch (err) {
        console.error("Error fetching project:", err); // Log error for debugging
        setError("Project not found");
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Project Details" page="Project Details" />
        </div>
      </div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              {projectData ? (
                <>
                  {/* Pass projectData to the Detail component as 'data' */}
                  <div>Location: {projectData.position}</div>
                  <Detail data={projectData} page="employers" />
                  {projectData.chips && (
                    <ChipList title={"Skills Required"} chips={projectData.chips} />
                  )}
                  {projectData.attachments && (
                    <Attachments attachments={projectData.attachments} />
                  )}
                  {projectData.tags && (
                    <ChipList title={"Tags"} chips={projectData.tags} />
                  )}
                  {projectData.project_proposals && (
                    <Reviews
                      reviews={projectData.project_proposals}
                      title={"Project Proposals"}
                    />
                  )}
                </>
              ) : (
                <div>No project data available</div>
              )}
            </div>
            <Sidebar data={projectData} page="employers"/>
          </div>
        </div>
      </div>
    </div>
  );
};
