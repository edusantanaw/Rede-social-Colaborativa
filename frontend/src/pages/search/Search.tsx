import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";

const url = "search";
const Search = () => {
  const { name } = useParams<{ name: string }>();
  const [typeSearch, setTypeSearch] = useState("user");
  const {data, error} = useFetching({
    url: `/${typeSearch}/${url}/${name}`,
    dependeces: [name, setTypeSearch],
  });

  console.log(data, error)

  return <div>Search</div>;
};

export default Search;
