import React, { useState, useRef } from "react";
import { HeaderContainer } from "./styles";
import { BiMessageSquare } from "react-icons/bi";
import { RiHomeLine } from "react-icons/ri";
import { IoNotificationsOutline } from "react-icons/io5";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import Messages from "./components/Messages";
import { useAuth } from "../../hooks/auth";
import Invites from "./components/Invites";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState<boolean>(false);
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const [showInvite, setShowInvite] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleShowPerfil() {
    setShowPerfil((show) => (show ? false : true));
    if (showMessages) setShowMessages(() => false);
  }

  function handleClose() {
    setShowMessages(() => false);
    setShowPerfil(() => false);
  }

  function handleShowMessages() {
    setShowMessages((show) => (show ? false : true));
    if (showPerfil) setShowPerfil(() => false);
  }

  function handleSearch() {
    if (searchRef.current) {
      const value = searchRef.current.value;
      if (value.length === 0) return;
      navigate(`/search/${value}`);
    }
  }

  function handleShowInvites() {
    handleClose();
    setShowInvite((show) => (show ? false : true));
  }

  return (
    <HeaderContainer>
      <div className="part">
        <h2>Social</h2>
      </div>
      <div className="part">
        <input type="search" placeholder="Pesquisar..." ref={searchRef} onChange={handleSearch} />
      </div>
      <div className="part">
        <ul className="list">
          <li id="home">
            <Link to="/">
              <RiHomeLine />
            </Link>
          </li>
          <li>
            <IoNotificationsOutline onClick={handleShowInvites} />
            {showInvite && <Invites />}
          </li>
          <li className={`${showMessages && "active"}`}>
            <BiMessageSquare onClick={handleShowMessages} />
            {showMessages && <Messages handleClose={handleClose} />}
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
      </div>
    </HeaderContainer>
  );
};

export default Header;
