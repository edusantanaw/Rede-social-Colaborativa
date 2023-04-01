import ClickAwayListener from "@mui/base/ClickAwayListener";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getRoom } from "../../../services/chat";
import { loadFollowing } from "../../../services/follow";
import { useAuth } from "../../hooks/auth";
import { useChat } from "../../hooks/useChat";
import { IUser } from "../../types/user";
import ChatMessages from "./components/ChatMessages";
import Following from "./components/Following";
import { ChatContainer } from "./style";

const Contacts = () => {
  const { user } = useAuth();
  const location = useLocation();

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

  function handleClose() {
    setShowContacts(false);
  }

  function handleShowContact() {
    setShowContacts((show) => (show ? false : true));
  }

  if (location.pathname.includes("project")) return <></>;

  return (
    <>
      <ClickAwayListener onClickAway={handleClose}>
        <div>
          {showContacts && (
            <Following
              handleClose={handleClose}
              following={following}
              handleShowMessage={handleShowMessage}
            />
          )}
          <ChatContainer onClick={handleShowContact}>
            <ContactsIcon />
          </ChatContainer>
        </div>
      </ClickAwayListener>
      {showChat && currentContact && currentRoom && (
        <ChatMessages following={currentContact} room={currentRoom} />
      )}
    </>
  );
};

export default Contacts;
