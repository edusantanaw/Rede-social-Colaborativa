import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Projects from "./components/Projects";
import User from "./components/User";
import { SearchContainer } from "./style";
import { Tab, Tabs } from "@mui/material";

const Search = () => {
  const { name } = useParams<{ name: string }>();
  const [typeSearch, setTypeSearch] = useState("user");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setTypeSearch(newValue);
  };

  return (
    <SearchContainer>
      <Tabs
      sx={{marginBottom: "1em"}}
        onChange={handleChange}
        value={typeSearch}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab sx={{ color: "#d2d2d2" }} value="user" label="Usuarios" />
        <Tab sx={{ color: "#d2d2d2" }} value="project" label="Projeto" />
      </Tabs>
      {typeSearch === "user" ? (
        <User name={name!} />
      ) : (
        <Projects name={name!} />
      )}
    </SearchContainer>
  );
};

export default Search;
