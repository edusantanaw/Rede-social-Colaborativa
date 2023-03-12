import React from "react";
import { NavContainer } from "./styles";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Nav = () => {
  const items = ["M", "A", "C", "E"];
  return (
    <NavContainer>
      <ul>
        <li>
          <MdOutlineAddCircleOutline />
        </li>
        {items.map((item, i) => (
          <li key={i} style={{ background: "blueviolet" }}>
            {item}
          </li>
        ))}
      </ul>
    </NavContainer>
  );
};

export default Nav;
