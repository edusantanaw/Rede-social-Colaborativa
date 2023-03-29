import React from "react";
import { useFetching } from "../../../../shared/hooks/useFetching";
import { IMessage } from "../../../../shared/types/message";
import { IUser } from "../../../../shared/types/user";
import { formatImage } from "../../../../shared/utils/formatImage";
import { MessageContainer } from "./style";

interface props {
  message: IMessage;
}

const MessageItem = ({ message }: props) => {
  const { data } = useFetching<IUser>({
    url: `/user/${message.senderId}`,
    dependeces: [],
  });

  return (
    <MessageContainer>
      {data && (
        <>
          <div className="user">
            <img src={formatImage(data.perfilPhoto)} alt="user_photo" />
          </div>
          <div className="message_content">
            <span>{data.name}</span>
            <p>{message.message}</p>
          </div>
        </>
      )}
    </MessageContainer>
  );
};

export default MessageItem;
