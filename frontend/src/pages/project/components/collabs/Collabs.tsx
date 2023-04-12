import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../../../components/modal/Modal";
import { useFetching } from "../../../../shared/hooks/useFetching";
import { IUser } from "../../../../shared/types/user";
import { formatImage } from "../../../../shared/utils/formatImage";
import InviteContact from "./InviteContact";
import { CollabContainer } from "./styles";

const Collabs = () => {
  const [showInvite, setShowInvite] = useState<boolean>(false);

  const { id } = useParams<{ id: string }>();
  const { data, error } = useFetching<IUser[]>({
    url: `/project/collabs/${id}`,
    dependeces: [id]
  });

  function handleShowInvite() {
    setShowInvite((show) => (show ? false : true));
  }
  

  return (
    <CollabContainer>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <img src={formatImage(item.perfilPhoto)} alt="user_photo" />
              <span>{item.name}</span>
            </li>
          ))}
      </ul>
      <div className="add" onClick={handleShowInvite}>
        <PersonAddIcon />
      </div>
      <Modal
        handleClose={handleShowInvite}
        open={showInvite}
      >
     <InviteContact contacts={data ?? []}  />
      </Modal>
    </CollabContainer>
  );
};

export default Collabs;
