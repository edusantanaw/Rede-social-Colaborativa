import React from "react";
import { HeaderContainer } from "./styles";
import { BiMessageSquare } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";

const Header = () => {
  return (
    <HeaderContainer>
      <div id="home">
        <RiHomeLine />
      </div>
      <ul className="list">
        <li>
          <IoNotificationsOutline />
        </li>
        <li>
          <BiMessageSquare />
        </li>
        <li>
          <BsFillPersonFill />
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
