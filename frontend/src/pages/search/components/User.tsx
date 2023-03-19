import React from "react";
import { baseUrl } from "../../../constants/baseUrl";
import { useFetching } from "../../../hooks/useFetching";
import { IUser } from "../../../types/user";
import defaultImage from "../../../assets/default.jpg";
import { Link } from "react-router-dom";
import { UserContainer } from "./style";

interface props {
  name: string;
}

const User = ({ name }: props) => {
  const { data, error } = useFetching<IUser[]>({
    url: `/user/search/${name}`,
    dependeces: [name],
  });

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
            <button>Seguir</button>
          </UserContainer>
        ))}
    </ul>
  );
};

export default User;
