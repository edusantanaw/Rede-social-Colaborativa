import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Chat from "./components/chat/Chat";
import Nav from "./components/nav/Nav";
import { ProjectContainer } from "./styles";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [CurrentItem, setCurrentItem] = useState<JSX.Element>(<Chat />);

  function handleTab(item: JSX.Element){
    setCurrentItem(()=> item);
  }

  return (
    <ProjectContainer>
      <Nav id={id!} handleTab = {handleTab} />
      <div className="tab">{CurrentItem}</div>
    </ProjectContainer>
  );
};

export default Project;
