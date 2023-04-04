import React, { useEffect, useRef, useState } from "react";
import { loadMessages, sendMessage } from "../../../../services/chat";
import { useAuth } from "../../../hooks/auth";
import { useChat } from "../../../hooks/useChat";
import { IMessage } from "../../../types/message";
import { IUser } from "../../../types/user";
import { formatImage } from "../../../utils/formatImage";
import socket from "../../../utils/socket";
import { ChatMessageContainer } from "../style";
import { IoMdClose } from "react-icons/io";
import SendIcon from "@mui/icons-material/Send";
import { TextareaAutosize } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";

interface props {
  following: IUser;
  room: string;
}

const ChatMessages = ({ following, room }: props) => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const messageRef = useRef<HTMLInputElement | null>(null);
  const chatRef = useRef<HTMLUListElement | null>(null);

  const { reset } = useChat();

  const { user } = useAuth();

  useEffect(() => {
    if (messageRef.current && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
      messageRef.current.focus();
    }
  }, [messages]);

  useEffect(() => {
    (async () => {
      const loadedMessage = await loadMessages(room);
      setMessages((current) => [...current, ...loadedMessage]);
    })();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((current) => [...current, data]);
    });
  }, [socket]);

  async function handleMessage() {
    if (messageRef.current) {
      const message = messageRef.current.value;
      if (message.length === 0) return;
      const newMessage = { message, room, senderId: user!.id };
      await sendMessage(newMessage);
      messageRef.current.value = "";
      setMessages((current) => [...current, newMessage]);
      chatRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <ClickAwayListener onClickAway={reset}>
      <ChatMessageContainer>
        <div className="head">
          <div className="head_user">
            <img src={formatImage(user?.perfilPhoto)} alt="perfil_photo" />
            <span>{following.name}</span>
          </div>
          <IoMdClose onClick={reset} />
        </div>
        <ul className="messages" ref={chatRef}>
          {messages.map((message, i) => (
            <li
              key={i}
              className={message.senderId === user!.id ? "user" : "contact"}
            >
              <p>{message.message}</p>
            </li>
          ))}
        </ul>
        <div className="send_message">
          <TextareaAutosize
            id="message_input"
            aria-label="empty textarea"
            placeholder="Mensagem"
            ref={messageRef}
          />
          <button onClick={handleMessage}>
            <SendIcon fontSize="small" />
          </button>
        </div>
      </ChatMessageContainer>
    </ClickAwayListener>
  );
};

export default ChatMessages;
