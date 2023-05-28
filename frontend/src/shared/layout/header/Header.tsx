import { useRef, useState } from "react";
import { BiMessageSquare } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiHomeLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import Invites from "./components/Invites";
import Messages from "./components/Messages";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/logo.png";
import { TextField } from "@mui/material";

const Header = () => {
  const [showPerfil, setShowPerfil] = useState<boolean>(false);
  const [showMessages, setShowMessages] = useState<boolean>(false);
  const [showInvite, setShowInvite] = useState<boolean>(false);
  const searchRef = useRef<HTMLInputElement | null>(null);

  const { logout, user } = useAuth();
  const navigate = useNavigate();

  function handleShowPerfil() {
    setShowMessages(() => false);
    setShowInvite(() => false);
    setShowPerfil((show) => (show ? false : true));
  }

  function handleClose() {
    setShowMessages(() => false);
    setShowInvite(() => false);
    setShowPerfil(() => false);
  }

  function handleShowMessages() {
    setShowInvite(() => false);
    setShowPerfil(() => false);
    setShowMessages((show) => (show ? false : true));
  }

  function handleSearch() {
    if (searchRef.current) {
      const value = searchRef.current.value;
      if (value.length === 0) return;
      navigate(`/search/${value}`);
    }
  }

  function handleShowInvites() {
    setShowPerfil(() => false);
    setShowMessages(() => false);
    setShowInvite((show) => (show ? false : true));
  }

  return (
    <HeaderContainer>
      <div className="part">
        <img src={Logo} alt="logo_tipo" />
        <h2>Collab Projects</h2>
      </div>
      <div className="search">
        <TextField
          label="Pesquisar"
          variant="filled"
          size="small"
          fullWidth
          inputRef={searchRef}
          onChange={handleSearch}
          color="secondary"
        />
      </div>
      <div className="part">
        <ul className="list">
          <li id="home">
            <Link to="/">
              <RiHomeLine />
            </Link>
          </li>
          <li
            className={`${showInvite && "active"}`}
            onClick={handleShowInvites}
          >
            <IoNotificationsOutline />
            {showInvite && <Invites handleClose={handleClose} />}
          </li>
          <li
            className={`${showMessages && "active"}`}
            onClick={handleShowMessages}
          >
            <BiMessageSquare />
            {showMessages && <Messages handleClose={handleClose} />}
          </li>
          <li
            className={`perfil ${showPerfil && "active"}`}
            onClick={handleShowPerfil}
          >
            <BsFillPersonFill />
            {showPerfil && (
              <ul id="perfil_actions" onClick={handleShowPerfil}>
                <>
                  <li>
                    {user && <Link to={`/perfil/${user.id}`}>Perfil</Link>}
                  </li>
                  <li onClick={logout}>Sair</li>
                </>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
