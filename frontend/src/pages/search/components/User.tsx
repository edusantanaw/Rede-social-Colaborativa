import React, { useState, useEffect } from "react";
import { baseUrl } from "../../../constants/baseUrl";
import { useFetching } from "../../../shared/hooks/useFetching";
import { IUser } from "../../../shared/types/user";
import defaultImage from "../../../assets/default.jpg";
import { Link } from "react-router-dom";
import { UserContainer } from "./style";
import { useAuth } from "../../../shared/hooks/auth";
import { addFollow, loadFollowing } from "../../../services/follow";
import { formatImage } from "../../../shared/utils/formatImage";

interface props {
  name: string;
}

const User = ({ name }: props) => {
  const [following, setFollowing] = useState<string[]>([]);
  const { user } = useAuth();

  const { data, error } = useFetching<IUser[]>({
    url: `/user/search/${name}`,
    dependeces: [name],
  });

  useEffect(() => {
    try {
      (async () => {
        const response = await loadFollowing(user!.id);
        setFollowing(() => [...response.map((user) => user.id)]);
      })();
    } catch (error) {}
  }, []);

  async function handleFollow(id: string) {
    await addFollow(id, user!.id);
  }

  function showButtomFollow(id: string) {
    if (user!.id === id) {
      return false;
    }
    return true;
  }

  return (
    <ul>
      {data &&
        data.map((item, i) => (
          <UserContainer key={i}>
            <Link to={`/perfil/${item.id}`}>
              <img src={formatImage(item.perfilPhoto)} alt="user_photo" />
              <span>{item.name}</span>
            </Link>
            {!following.includes(item.id) ? (
              showButtomFollow(item.id) && (
                <button onClick={() => handleFollow(item.id)}>Seguir</button>
              )
            ) : (
              <button>Seguindo</button>
            )}
          </UserContainer>
        ))}
    </ul>
  );
};

export default User;
