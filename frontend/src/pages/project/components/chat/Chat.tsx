import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../../../shared/hooks/auth";
import { loadMessages, sendMessage } from "../../../../services/chat";
import { IMessage } from "../../../../shared/types/message";
import socket from "../../../../shared/utils/socket";
import MessageItem from "./MessageItem";
import { ChatContainer } from "./style";

const Chat = () => {
  const { id } = useParams<{ id: string }>();

  const [messages, setMessages] = useState<IMessage[]>([]);
  const { user } = useAuth();
  const messageRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (messageRef.current) {
      messageRef.current.focus();
    }

    (async () => {
      const response = await loadMessages(id!);
      setMessages(() => response);
    })();
  }, []);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((current) => [...current, data]);
    });
  }, [socket]);

  const pressEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    if (!messageRef.current) return;
    const message = messageRef.current.value;
    if (message.length === 0) return;
    const newMessage = { message, room: id!, senderId: user!.id };
    await sendMessage(newMessage);
    setMessages((current) => [...current, newMessage]);
    messageRef.current.value = "";
  };

  return (
    <ChatContainer>
      <ul className="messages">
        {messages.length > 0 &&
          messages.map((message, i, arr) => {
           if(i > 0 && arr[i].senderId === arr[i - 1].senderId) {
              return <p id="same_user">{message.message}</p>
           }
            return <MessageItem message={message} key={i} />;
          })}
      </ul>
      <div className="input">
        <input
          type="text"
          placeholder="Conversar..."
          ref={messageRef}
          onKeyPress={(e) => pressEnter(e)}
        />
      </div>
    </ChatContainer>
  );
};

export default Chat;
