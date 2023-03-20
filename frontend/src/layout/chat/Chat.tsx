import React, { useEffect, useState } from "react";
import { ChatContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import { useAuth } from "../../hooks/auth";
import { baseUrl } from "../../constants/baseUrl";
import { IUser } from "../../types/user";
import { loadFollowing } from "../../services/follow";
import ChatMensagens from "./ChatMensagens";

const Chat = () => {
  const { user } = useAuth();
  const [showChat, setShowChat] = useState<boolean>(false);
  const [currentRoom, setCurrentRoom] = useState<number | null>(null)

  const image = (userFollowing: IUser) =>
    userFollowing.perfilPhoto
      ? baseUrl + userFollowing.perfilPhoto
      : defaultImage;

  const [following, setFollowing] = useState<IUser[]>([]);

  function handleShowMensagem() {
    setShowChat((show) => (show ? false : true));
  }

  useEffect(() => {
    (async () => {
      const response = await loadFollowing(user!.id);
      setFollowing(response);
    })();
  }, []);

  function getRoom(){
    
  }

  return (
    <>
      {showChat && <ChatMensagens />}
      <ChatContainer>
        <div className="header">
          <img src={image(user!)} alt="user_photo" />
          <span>Mensagens</span>
        </div>
        <ul className="following">
          {following.length > 0 &&
            following.map((userItem, i) => (
              <li key={i} onClick={handleShowMensagem}>
                <img src={image(userItem)} alt="user_photo" />
                <span>{userItem.name}</span>
              </li>
            ))}
        </ul>
      </ChatContainer>
    </>
  );
};

export default Chat;
