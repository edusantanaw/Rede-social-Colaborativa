import React, { useState } from "react";
import { ProjectContainer } from "./styles";
import { MdCreate } from "react-icons/md";
import { NewProjectModal } from "./NewProjectModal";
import { useFetching } from "../../../shared/hooks/useFetching";
import { useAuth } from "../../../shared/hooks/auth";
import { formatImage } from "../../../shared/utils/formatImage";
import { Link } from "react-router-dom";

type IProject = {
  id: string;
  name: string;
  perfilImage?: string;
};

const Projects = () => {
  const [newProjectModal, setNewProjectModal] = useState<boolean>(false);
  const { user } = useAuth();

  const { data, error } = useFetching<IProject[]>({
    url: `/project/user/${user?.id}`,
    dependeces: [],
  });

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
          {data &&
            data.map((project, i) => (
              <li key={i} className="project">
                <Link to={`/project/${project.id}`}>
                  <img
                    src={formatImage(project.perfilImage)}
                    alt="project_image"
                  />
                  <span>{project.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </ProjectContainer>
    </>
  );
};

export default Projects;
