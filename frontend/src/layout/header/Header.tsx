import React, { useState } from "react";
import { HeaderContainer } from "./styles";
import { BiMessageSquare } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";
import { Link } from "react-router-dom";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState<boolean>(false);

  const { logout, user } = useAuth();

  function handleShowPerfil() {
    setShowPerfil((show) => (show ? false : true));
  }

  return (
    <HeaderContainer>
      <ul className="list">
        <li>
          <Link to="/">
            {" "}
            <RiHomeLine />
          </Link>
        </li>
        <li>
          <IoNotificationsOutline />
        </li>
        <li>
          <BiMessageSquare />
        </li>
        <li className="perfil">
          <BsFillPersonFill onClick={handleShowPerfil} />
          {showPerfil && (
            <ul id="perfil_actions" onClick={handleShowPerfil}>
              <li>{user && <Link to={`/perfil/${user.id}`}>Perfil</Link>}</li>
              <li onClick={logout}>Sair</li>
            </ul>
          )}
        </li>
      </ul>
    </HeaderContainer>
  );
};

export default Header;
