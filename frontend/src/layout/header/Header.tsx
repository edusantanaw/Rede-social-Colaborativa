import React, { useState, useRef } from "react";
import { HeaderContainer } from "./styles";
import { BiMessageSquare } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import Messages from "./components/Messages";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState<boolean>(false);
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleShowPerfil() {
    setShowPerfil((show) => (show ? false : true));
  }

  function handleShowMessages() {
    setShowMessages((show) => (show ? false : true));
  }

  function handleSearch() {
    if (searchRef.current) {
      const value = searchRef.current.value;
      if (value.length === 0) return;
      navigate(`/search/${value}`);
    }
  }

  return (
    <HeaderContainer>
      <div id="home">
        <Link to="/">
          <RiHomeLine />
        </Link>
      </div>
      <div className="search_bar">
        <input type="search" placeholder="pesquisar" ref={searchRef} />
        <button onClick={handleSearch}>
          <BiSearchAlt2 />
        </button>
      </div>
      <ul className="list">
        <li>
          <IoNotificationsOutline />
        </li>
        <li>
          <BiMessageSquare onClick={handleShowMessages} />
          {showMessages && <Messages handleShowMessages={handleShowMessages} />}
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
