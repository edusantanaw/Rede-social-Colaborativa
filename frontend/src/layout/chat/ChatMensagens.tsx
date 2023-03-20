import React from "react";
import { IUser } from "../../types/user";
import { ChatMessageContainer } from "./style";
import imageDefault from "../../assets/default.jpg";
import { baseUrl } from "../../constants/baseUrl";

interface props {
  following: IUser;
}

const ChatMensagens = ({ following }: props) => {
  const image = following.perfilPhoto
    ? baseUrl + following.perfilPhoto
    : imageDefault;

  return (
    <ChatMessageContainer>
      <div className="head">
        <img src={image} alt="perfil_photo" />
        {following.name}
      </div>
    </ChatMessageContainer>
  );
};

export default ChatMensagens;
