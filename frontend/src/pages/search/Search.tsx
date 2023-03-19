import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "./components/Projects";
import User from "./components/User";
import { SearchContainer } from "./style";

const Search = () => {
  const { name } = useParams<{ name: string }>();
  const [typeSearch, setTypeSearch] = useState("user");

  return (
    <SearchContainer>
        <div className="top">
            <span onClick={()=> setTypeSearch("user")}>Usuarios</span>
            <span  onClick={()=> setTypeSearch("project")}>Projetos</span>
        </div>
      {typeSearch === "user" ? (
        <User name={name!} />
      ) : (
        <Projects name={name!} />
      )}
    </SearchContainer>
  );
};

export default Search;
