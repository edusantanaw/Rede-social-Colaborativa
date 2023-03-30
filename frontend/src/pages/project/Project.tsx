import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../shared/hooks/auth";
import { useFetching } from "../../shared/hooks/useFetching";
import { IProject } from "../../shared/types/project";
import { formatImage } from "../../shared/utils/formatImage";
import Chat from "./components/chat/Chat";
import Nav from "./components/nav/Nav";
import { ProjectContainer, Projects } from "./styles";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [CurrentItem, setCurrentItem] = useState<JSX.Element>(<Chat />);

  const { user } = useAuth();

  const { data, error } = useFetching<IProject[]>({
    url: `/project/user/${user?.id}`,
    dependeces: [],
  });

  function handleTab(item: JSX.Element) {
    setCurrentItem(() => item);
  }

  

  return (
    <ProjectContainer>
      <Projects>
        {data &&
          data.map((project, i) => (
            <li key={i}>
              <img src={formatImage(project.perfilImage)} alt="project_image" />
            </li>
          ))}
      </Projects>
      <Nav id={id!} handleTab={handleTab} />
      <div className="tab">{CurrentItem}</div>
    </ProjectContainer>
  );
};

export default Project;
