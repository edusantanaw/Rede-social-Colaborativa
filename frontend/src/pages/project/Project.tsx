import React from "react";
import { useParams } from "react-router-dom";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  return <div>Project</div>;
};

export default Project;
