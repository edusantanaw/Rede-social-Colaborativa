import { createContext, useState } from "react";
import { joinRoom, leaveRoom } from "../../services/chat";
import { IUser } from "../types/user";

interface IChatContext {
  currentRoom: string | null;
  currentContact: IUser | null;
  showChat: boolean;
  handleShowChat: () => void;
  reset: () => void;
  handleContact: (data: IUser) => void;
  handleRoom: (data: string | null) => Promise<void>;
}

export const ChatContext = createContext({} as IChatContext);

type props = {
  children: React.ReactNode;
};

export function ChatProvider({ children }: props) {
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);
  const [currentContact, setCurrentContact] = useState<IUser | null>(null);
  const [showChat, setShowChat] = useState<boolean>(false);

  function handleShowChat() {
    setShowChat((show) => (show ? false : true));
  }

  function handleContact(contact: IUser) {
    setCurrentContact(() => contact);
  }

  function reset() {
    setCurrentContact(null);
    setCurrentRoom(null);
    setShowChat(false);
  }

  async function handleRoom(room: string | null) {
    if (!room) {
      await leaveRoom(currentRoom!);
      reset();
      return;
    }
    setCurrentRoom(room);
    await joinRoom(room);
  }

  return (
    <ChatContext.Provider
      value={{
        currentContact,
        currentRoom,
        showChat,
        handleShowChat,
        handleContact,
        handleRoom,
        reset,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
