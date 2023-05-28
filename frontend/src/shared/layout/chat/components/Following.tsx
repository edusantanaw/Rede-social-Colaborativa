import { TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { IUser } from "../../../types/user";
import { formatImage } from "../../../utils/formatImage";
import { ContactsContainer } from "./styles";

interface props {
  following: IUser[];
  handleShowMessage: (item: IUser) => void;
  handleClose: () => void;
}

const Following = ({ following, handleShowMessage, handleClose }: props) => {
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
    <ContactsContainer>
      <div className="search">
        <TextField
          color="secondary"
          variant="standard"
          sx={{ color: "#fff", outlineColor: "#fff " }}
          label="Pesquisar"
          fullWidth
          onChange={searchContacts}
        />
      </div>
      <ul className="following">
        {!target ? (
          following.map((userItem, i) => (
            <li
              key={i}
              onClick={() => {
                handleShowMessage(userItem);
                handleClose();
              }}
            >
              <img src={formatImage(userItem.perfilPhoto)} alt="user_photo" />
              <span>{userItem.name}</span>
            </li>
          ))
        ) : filteredContacts.length > 0 ? (
          filteredContacts.map((userItem, i) => (
            <li
              key={i}
              onClick={() => {
                handleShowMessage(userItem);
                handleClose();
              }}
            >
              <img src={formatImage(userItem.perfilPhoto)} alt="user_photo" />
              <span>{userItem.name}</span>
            </li>
          ))
        ) : (
          <Typography fontSize="0.8em" textAlign="center">
            Nenhum contato encontrado
          </Typography>
        )}
      </ul>
    </ContactsContainer>
  );
};

export default Following;
