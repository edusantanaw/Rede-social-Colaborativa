import React, { useEffect, useState } from "react";
import { ChatContainer } from "./style";
import { useAuth } from "../../hooks/auth";
import { IUser } from "../../types/user";
import { loadFollowing } from "../../services/follow";
import ChatMessages from "./ChatMessages";
import { getRoom, joinRoom, leaveRoom } from "../../services/chat";
import { formatImage } from "../../utils/formatImage";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useChat } from "../../hooks/useChat";

const Contacts = () => {
  const { user } = useAuth();
  const {
    currentContact,
    currentRoom,
    handleContact,
    handleRoom,
    handleShowChat,
    showChat,
  } = useChat();

  const [showContacts, setShowContacts] = useState<boolean>(false);

  const [following, setFollowing] = useState<IUser[]>([]);

  async function handleShowMensagem(userItem: IUser) {
    handleContact(userItem);
    await room(userItem.id);
    handleShowChat();
  }

  useEffect(() => {
    (async () => {
      const response = await loadFollowing(user!.id);
      setFollowing(response);
    })();
  }, []);

  async function room(followingId: string) {
    const room = await getRoom(user!.id, followingId);
    await handleRoom(room);
  }

  console.log(showChat, currentContact, currentRoom)
  function handleShowContact() {
    console.log(showContacts)
    setShowContacts((show) => (show ? false : true));
  }

  return (
    <ChatContainer>
      <div className="contacts">
        <div className="header">
          <div>
            <img src={formatImage(user?.perfilPhoto)} alt="user_photo" />
            <span>Contatos</span>
          </div>
          {!showContacts ? (
            <FaAngleUp onClick={handleShowContact} />
          ) : (
            <FaAngleDown onClick={handleShowContact} />
          )}
        </div>
        {showContacts && (
          <ul className="following">
            {following.length > 0 &&
              following.map((userItem, i) => (
                <li key={i} onClick={() => handleShowMensagem(userItem)}>
                  <img
                    src={formatImage(userItem.perfilPhoto)}
                    alt="user_photo"
                  />
                  <span>{userItem.name}</span>
                </li>
              ))}
          </ul>
        )}
      </div>
      {showChat && currentContact && currentRoom && (
        <ChatMessages following={currentContact} room={currentRoom} />
      )}
    </ChatContainer>
  );
};

export default Contacts;
