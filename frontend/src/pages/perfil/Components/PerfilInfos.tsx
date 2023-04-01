import { useState } from "react";
import Modal from "../../../components/modal/Modal";
import { IUser } from "../../../shared/types/user";
import { formatImage } from "../../../shared/utils/formatImage";
import EditPerfil from "./editar/EditPerfil";
import { InfosPerfil } from "./styles";
import { useAuth } from "../../../shared/hooks/auth";

interface props {
  data: IUser;
}

const PerfilInfos = ({ data }: props) => {
  const [updatedUser, setUpdatedUser] = useState<IUser | null>(null);
  const [update, setUpdate] = useState<boolean>(false);

  const { user } = useAuth();

  function handleModal() {
    setUpdate((show) => (show ? false : true));
  }

  function handleCrete(data: IUser) {
    setUpdatedUser(() => data);
    handleModal();
  }

  const current = updatedUser ?? data;

  return (
    <InfosPerfil className="content">
      <Modal handleClose={handleModal} open={update}>
        <EditPerfil handleCreate={handleCrete} currentInfos={current} />
      </Modal>
      <img
        src={formatImage(current.perfilPhoto)}
        alt="user_image"
        id="user_photo"
      />
      <div className="infos">
        <h3>{current.name}</h3>
        <span>{current.email}</span>
        {current.bio && (
          <div id="bio">
            <span>Bio:</span>
            <p>{current.bio}</p>
          </div>
        )}
      </div>
      {current.id === user?.id && (
        <button onClick={handleModal}>Atualizar</button>
      )}
    </InfosPerfil>
  );
};

export default PerfilInfos;
