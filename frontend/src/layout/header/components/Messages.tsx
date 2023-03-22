import { useAuth } from "../../../hooks/auth";
import { useFetching } from "../../../hooks/useFetching";
import { formatImage } from "../../../utils/formatImage";
import { MessagesContainer } from "./style";

type IRecentMessages = {
  userId: string;
  perfilPhoto?: string;
  message: string;
  name: string;
  room: string;
};

const Messages = () => {
  const { user } = useAuth();
  const url = `/messages/recent/${user!.id}`;
  const { data, error } = useFetching<IRecentMessages[]>({
    url,
    dependeces: [],
  });

  console.log(data);

  return (
    <MessagesContainer>
      <h3>Mensagens</h3>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i}>
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
