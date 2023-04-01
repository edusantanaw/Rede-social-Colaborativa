import React, { useState } from "react";
import { IUser } from "../../../shared/types/user";
import defaultImage from "../../../shared/assets/default.jpg";
import defaultBg from "../../../shared/assets/defaultBg.jpg";
import { baseUrl } from "../../../constants/baseUrl";
import { InfosPerfil } from "./styles";
import Modal from "../../../components/modal/Modal";
import { Box } from "@mui/system";
import EditPerfil from "./editar/EditPerfil";

interface props {
  data: IUser;
}

const PerfilInfos = ({ data }: props) => {
  const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
  const [update, setUpdate] = useState<boolean>(false);

  function handleModal() {
    setUpdate((show) => (show ? false : true));
  }

  return (
    <InfosPerfil className="content">
      <Modal handleClose={handleModal} open={update}>
        <EditPerfil handleCreate={handleModal} currentInfos={data} />
      </Modal>
      <img
        src={data.perfilPhoto ? `${baseUrl}/${data.perfilPhoto}` : defaultImage}
        alt="user_image"
        id="user_photo"
      />
      <div className="infos">
        <h3>{data.name}</h3>
        <span>{data.email}</span>
        {data.bio && <p>{data.bio}</p>}
      </div>

      <button onClick={handleModal}>Atualizar</button>
    </InfosPerfil>
  );
};

export default PerfilInfos;
