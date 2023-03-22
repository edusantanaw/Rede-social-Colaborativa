import { useAuth } from "../../../hooks/auth";
import { useChat } from "../../../hooks/useChat";
import { useFetching } from "../../../hooks/useFetching";
import { formatImage } from "../../../utils/formatImage";
import { MessagesContainer } from "./style";

type IRecentMessages = {
  userId: string;
  perfilPhoto?: string;
  message: string;
  name: string;
  room: string;
  email: string;
};

interface props {
  handleShowMessages: () => void;
}

const Messages = ({ handleShowMessages }: props) => {
  const { user } = useAuth();
  const url = `/messages/recent/${user!.id}`;
  const { data, error } = useFetching<IRecentMessages[]>({
    url,
    dependeces: [],
  });

  const { handleRoom, handleShowChat, handleContact, showChat } = useChat();

  async function handleChat(data: IRecentMessages) {
    handleContact({
      email: data.email,
      id: data.userId,
      name: data.name,
      perfilPhoto: data.perfilPhoto,
    });
    await handleRoom(data.room);
    handleShowMessages();
    if (showChat) return;
    handleShowChat();
  }

  return (
    <MessagesContainer>
      <h3>Mensagens</h3>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i} onClick={() => handleChat(item)}>
              <img src={formatImage(item.perfilPhoto)} alt="user_photo" />
              <div className="right">
                <span>{item.name}</span>
                <p>{item.message}</p>
              </div>
            </li>
          ))}
      </ul>
    </MessagesContainer>
  );
};

export default Messages;
