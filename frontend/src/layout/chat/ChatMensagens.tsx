import React, { useEffect, useRef } from "react";
import { IUser } from "../../types/user";
import { ChatMessageContainer } from "./style";
import imageDefault from "../../assets/default.jpg";
import { baseUrl } from "../../constants/baseUrl";
import socket, { sendMessage } from "../../services/chat";
import { useAuth } from "../../hooks/auth";

interface props {
  following: IUser;
  room: string;
}

const ChatMensagens = ({ following, room }: props) => {
  const messageRef = useRef<HTMLInputElement | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.focus();
    }
  }, []);
  useEffect(() => {
    socket.on("receive_message", (data) => {
      console.log(data);
    });
  }, [socket]);
  console.log("renderizou")

  const image = following.perfilPhoto
    ? baseUrl + following.perfilPhoto
    : imageDefault;

  async function handleMessage() {
    if (messageRef.current) {
      const message = messageRef.current.value;
      if (message.length === 0) return;
      await sendMessage({ message, room, senderId: user!.id });
    }
  }

  return (
    <ChatMessageContainer>
      <div className="head">
        <img src={image} alt="perfil_photo" />
        {following.name}
      </div>
      <div className="messages"></div>
      <div className="send_message">
        <input type="text" placeholder="enviar mensagem" ref={messageRef} />
        <button onClick={handleMessage}>Enviar</button>
      </div>
    </ChatMessageContainer>
  );
};

export default ChatMensagens;
