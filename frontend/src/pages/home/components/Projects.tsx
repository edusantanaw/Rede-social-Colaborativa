import React from "react";
import { ProjectContainer } from "./styles";
import { MdCreate } from "react-icons/md";
import defaultImage from "../../../assets/default.jpg";

const Projects = () => {
  const projects = [
    {
      name: "Project",
      image: defaultImage,
    },
    {
      name: "Project 2",
      image: defaultImage,
    },
    {
      name: "Project seila",
      image: defaultImage,
    },
    {
      name: "Project",
      image: defaultImage,
    },
  ];

  return (
    <ProjectContainer>
      <div className="top">
        <span>Projetos</span>
      </div>
      <ul>
        <li>
          <div className="icon">
            <MdCreate color="#fff" />
          </div>
          <span>Criar novo projeto</span>
        </li>
        {projects.map((project, i) => (
          <li key={i} className="project">
            <img src={project.image} alt="project_image" />
            <span>{project.name}</span>
          </li>
        ))}
      </ul>
    </ProjectContainer>
  );
};

export default Projects;
