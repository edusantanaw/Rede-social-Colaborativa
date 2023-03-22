import React, { useState } from "react";
import { ProjectContainer } from "./styles";
import { MdCreate } from "react-icons/md";
import defaultImage from "../../../assets/default.jpg";
import { NewProjectModal } from "./NewProjectModal";

const Projects = () => {
  const [newProjectModal, setNewProjectModal] = useState<boolean>(false);

  const projects = [
    {
      name: "Project",
      image: defaultImage,
    },
  ];

  function handleProjectModal() {
    setNewProjectModal((show) => (show ? false : true));
  }

  return (
    <>
      {newProjectModal && (
       <NewProjectModal handleProjectModal={handleProjectModal} />
      )}
      <ProjectContainer>
        <div className="top">
          <span>Projetos</span>
        </div>
        <ul>
          <li onClick={handleProjectModal}>
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
    </>
  );
};

export default Projects;
