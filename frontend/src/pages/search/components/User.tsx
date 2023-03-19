import React from "react";
import { baseUrl } from "../../../constants/baseUrl";
import { useFetching } from "../../../hooks/useFetching";
import { IUser } from "../../../types/user";
import defaultImage from "../../../assets/default.jpg";
import { Link } from "react-router-dom";
import { UserContainer } from "./style";
import { useAuth } from "../../../hooks/auth";
import { addFollow } from "../../../services/follow";

interface props {
  name: string;
}

const User = ({ name }: props) => {
  const { data, error } = useFetching<IUser[]>({
    url: `/user/search/${name}`,
    dependeces: [name],
  });

  const { user } = useAuth();

  async function handleFollow(id: string) {
    const response = await addFollow(id, user!.id);
  }

  const showButtomFollow = (id: string) => {
    if (user!.id === id) {
      return false;
    }
    return true;
  };

  return (
    <ul>
      {data &&
        data.map((item, i) => (
          <UserContainer key={i}>
            <Link to={`/perfil/${item.id}`}>
              <img
                src={
                  item.perfilPhoto ? baseUrl + item.perfilPhoto : defaultImage
                }
                alt="user_photo"
              />
              <span>{item.name}</span>
            </Link>
            {showButtomFollow(item.id) && (
              <button onClick={() => handleFollow(item.id)}>Seguir</button>
            )}
          </UserContainer>
        ))}
    </ul>
  );
};

export default User;
