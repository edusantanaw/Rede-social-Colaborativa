import React, { useEffect, useState } from "react";
import { ChatContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import { useAuth } from "../../hooks/auth";
import { baseUrl } from "../../constants/baseUrl";
import { IUser } from "../../types/user";
import { loadFollowing } from "../../services/follow";
import ChatMensagens from "./ChatMensagens";
import { joinRoom, leaveRoom } from "../../services/chat";

const Chat = () => {
  const { user } = useAuth();
  const [showChat, setShowChat] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  const image = (userFollowing: IUser) =>
    userFollowing.perfilPhoto
      ? baseUrl + userFollowing.perfilPhoto
      : defaultImage;

  const [following, setFollowing] = useState<IUser[]>([]);

  async function handleShowMensagem(userItem: IUser) {
    setCurrentContact(userItem);
    await room(userItem.id);
    setShowChat((show) => (show ? false : true));
  }

  useEffect(() => {
    (async () => {
      const response = await loadFollowing(user!.id);
      setFollowing(response);
    })();
  }, []);

  async function room(followingId: string) {
    if (currentRoom) {
      leaveRoom(currentRoom);
      setCurrentRoom(null)
      setCurrentContact(null)
      return;
    }
    const data = await joinRoom(user!.id, followingId);
    setCurrentRoom(data);
  }

  return (
    <ChatContainer>
      <div className="contacts">
        <div className="header">
          <img src={image(user!)} alt="user_photo" />
          <span>Mensagens</span>
        </div>
        <ul className="following">
          {following.length > 0 &&
            following.map((userItem, i) => (
              <li key={i} onClick={() => handleShowMensagem(userItem)}>
                <img src={image(userItem)} alt="user_photo" />
                <span>{userItem.name}</span>
              </li>
            ))}
        </ul>
      </div>
      {showChat && currentContact && currentRoom && (
        <ChatMensagens following={currentContact} room={currentRoom} />
      )}
    </ChatContainer>
  );
};

export default Chat;
