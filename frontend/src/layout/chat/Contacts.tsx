import React, { useEffect, useState } from "react";
import { ChatContainer } from "./style";
import { useAuth } from "../../hooks/auth";
import { IUser } from "../../types/user";
import { loadFollowing } from "../../services/follow";
import ChatMessages from "./ChatMessages";
import { joinRoom, leaveRoom } from "../../services/chat";
import { formatImage } from "../../utils/formatImage";
import {FaAngleUp, FaAngleDown} from 'react-icons/fa'

const Contacts = () => {
  const { user } = useAuth();
  const [showChat, setShowChat] = useState<boolean>(false);
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [showContacts, setShowContacts] = useState<boolean>(false)

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

  function handleShowContact(){
    setShowContacts((show)=> show ? false : true); 
  }

  return (
    <ChatContainer>
      <div className="contacts">
        <div className="header">
        <div>
          <img src={formatImage(user?.perfilPhoto)} alt="user_photo" />
          <span>Contatos</span>
        </div>
        {!showContacts ? <FaAngleUp onClick={handleShowContact} />: <FaAngleDown  onClick={handleShowContact}/>}
        </div>
      {showContacts &&   <ul className="following">
          {following.length > 0 &&
            following.map((userItem, i) => (
              <li key={i} onClick={() => handleShowMensagem(userItem)}>
                <img src={formatImage(userItem.perfilPhoto)} alt="user_photo" />
                <span>{userItem.name}</span>
              </li>
            ))}
        </ul>}
      </div>
      {showChat && currentContact && currentRoom && (
        <ChatMessages following={currentContact} room={currentRoom} />
      )}
    </ChatContainer>
  );
};

export default Contacts;
