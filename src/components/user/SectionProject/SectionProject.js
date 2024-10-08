import React from "react";
import "./SectionProject.css";
import CustomTitle from "../CustomTitle/CustomTitle";
import "./SectionProject.css";
import ProjectImg1 from "../../../assets/images/project/project-01.jpg";
import ProjectImg2 from "../../../assets/images/project/project-02.jpg";
import ProjectImg3 from "../../../assets/images/project/project-03.jpg";
import ProjectImg4 from "../../../assets/images/project/project-04.jpg";
import ProjectImg5 from "../../../assets/images/project/project-05.jpg";
import ProjectImg6 from "../../../assets/images/project/project-06.jpg";
import ProjectImg7 from "../../../assets/images/project/project-07.jpg";
import ProjectImg8 from "../../../assets/images/project/project-08.jpg";

const ProjectCard = ({ image, project, developer, tech }) => {
  return (
    <div className="ProjectCard">
      <div className="image">
        <img src={image} alt="image_project_card" />
        <div className="technology">{tech}</div>
      </div>
      <div className="info">
        <div className="count">
          <p>{project}</p>
          <p>Projects</p>
        </div>
        <div className="line"></div>
        <div className="count">
          <p>{developer}</p>
          <p>Developers</p>
        </div>
      </div>
    </div>
  );
};

const SectionProject = () => {
  const projectData = [
    {
      image: ProjectImg1,
      number: 45,
      developers: 20,
      tech: "Android Apps",
    },
    {
      image: ProjectImg2,
      number: 52,
      developers: 17,
      tech: "Laravel",
    },
    {
      image: ProjectImg3,
      number: 58,
      developers: 12,
      tech: "React",
    },
    {
      image: ProjectImg4,
      number: 45,
      developers: 20,
      tech: "Angular",
    },
    {
      image: ProjectImg5,
      number: 45,
      developers: 20,
      tech: "Angular",
    },
    {
      image: ProjectImg6,
      number: 45,
      developers: 20,
      tech: "Angular",
    },
    {
      image: ProjectImg7,
      number: 55,
      developers: 20,
      tech: "Angular",
    },
    {
      image: ProjectImg8,
      number: 45,
      developers: 20,
      tech: "PHP",
    },
  ];
  return (
    <div className="SectionProject">
      <div className="section-title">
        <CustomTitle
          title="Get Inspired By Development Projects"
          desc="High performing solutions to your requests"
        />
      </div>

      <div className="section-content">
        <div className="project-list">
          <div className="project-list-inner">
            {projectData.map((project) => {
              return (
                <div className="project-card">
                  <ProjectCard
                    image={project.image}
                    project={project.number}
                    developer={project.developers}
                    tech={project.tech}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionProject;
