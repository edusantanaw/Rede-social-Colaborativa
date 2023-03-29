import React, { useState, useRef } from "react";
import { HeaderContainer } from "./styles";
import { BiMessageSquare } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";
import Messages from "./components/Messages";
import { useAuth } from "../../hooks/auth";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState<boolean>(false);
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleShowPerfil() {
    setShowPerfil((show) => (show ? false : true));
    if(showMessages) setShowMessages(()=> false);
  }

  function handleShowMessages() {
    setShowMessages((show) => (show ? false : true));
    if(showPerfil) setShowPerfil(()=> false)
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
      <div className="search_bar">
        <h2>Social</h2>
        <input type="search" placeholder="Pesquisar..." ref={searchRef} />
      </div>
      <ul className="list">
        <li id="home">
          <Link to="/">
            <RiHomeLine />
          </Link>
        </li>
        <li>
          <IoNotificationsOutline />
        </li>
        <li className={`${showMessages && "active"}`}>
          <BiMessageSquare onClick={handleShowMessages} />
          {showMessages && <Messages handleShowMessages={handleShowMessages} />}
        </li>
        <li className={`perfil ${showPerfil && "active"}`}>
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
