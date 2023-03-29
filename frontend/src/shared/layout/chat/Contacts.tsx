import { useEffect, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { getRoom } from "../../../services/chat";
import { loadFollowing } from "../../../services/follow";
import { useAuth } from "../../hooks/auth";
import { useChat } from "../../hooks/useChat";
import { IUser } from "../../types/user";
import { formatImage } from "../../utils/formatImage";
import ChatMessages from "./components/ChatMessages";
import Following from "./components/Following";
import { ChatContainer } from "./style";

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

  async function handleShowMessage(userItem: IUser) {
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

  function handleShowContact() {
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
          <Following
            following={following}
            handleShowMessage={handleShowMessage}
          />
        )}
      </div>
      {showChat && currentContact && currentRoom && (
        <ChatMessages following={currentContact} room={currentRoom} />
      )}
    </ChatContainer>
  );
};

export default Contacts;
