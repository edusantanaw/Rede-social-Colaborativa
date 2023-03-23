import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "./components/Chat";
import Nav from "./components/Nav";
import { ProjectContainer } from "./styles";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [CurrentItem, setCurrentItem] = useState(<Chat />);

  return (
    <ProjectContainer>
      <Nav id={id!} />
      <div className="">{CurrentItem}</div>
    </ProjectContainer>
  );
};

export default Project;
