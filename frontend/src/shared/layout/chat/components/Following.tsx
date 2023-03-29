import React, { useState } from "react";
import { IUser } from "../../../types/user";
import { formatImage } from "../../../utils/formatImage";

interface props {
  following: IUser[];
  handleShowMessage: (item: IUser) => void;
}

const Following = ({ following, handleShowMessage }: props) => {
  const [target, setTarget] = useState<string | null>(null);

  const filteredContacts: IUser[] = following.filter(
    (item) =>
      target &&
      item.name.toLocaleLowerCase().includes(target.toLocaleLowerCase())
  );

  function searchContacts(e: React.ChangeEvent<HTMLInputElement>) {
    const target = e.target.value;
    setTarget(target);
  }

  return (
    <>
      <div className="search">
        <label htmlFor="search">Pesquisar contato:</label>
        <input
          type="search"
          placeholder="pesquisar..."
          onChange={(e) => searchContacts(e)}
        />
      </div>
      <ul className="following">
        {!target ? (
          following.map((userItem, i) => (
            <li key={i} onClick={() => handleShowMessage(userItem)}>
              <img src={formatImage(userItem.perfilPhoto)} alt="user_photo" />
              <span>{userItem.name}</span>
            </li>
          ))
        ) : filteredContacts.length > 0 ? (
          filteredContacts.map((userItem, i) => (
            <li key={i} onClick={() => handleShowMessage(userItem)}>
              <img src={formatImage(userItem.perfilPhoto)} alt="user_photo" />
              <span>{userItem.name}</span>
            </li>
          ))
        ) : (
          <span>Nenhum contato encontrado</span>
        )}
      </ul>
    </>
  );
};

export default Following;
