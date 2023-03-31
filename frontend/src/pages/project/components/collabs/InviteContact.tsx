import { useState } from "react";
import { useParams } from "react-router-dom";
import { inviteCollab } from "../../../../services/project";
import { useAuth } from "../../../../shared/hooks/auth";
import { useFetching } from "../../../../shared/hooks/useFetching";
import { IUser } from "../../../../shared/types/user";
import { formatImage } from "../../../../shared/utils/formatImage";
import { Contacts } from "./styles";
import CheckIcon from '@mui/icons-material/Check';

interface props {
  contacts: IUser[];
}
const InviteContact = ({ contacts }: props) => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();
  const [inviteds, setinvited] = useState<string[]>([]);

  const { data } = useFetching<IUser[]>({
    url: `/follow/following/${user?.id}`,
  });

  function showInviteButton(id: string) {
    const show = contacts.filter((u) => u.id === id);
    if (show.length > 0) {
      return false;
    }
    return true;
  }

  async function handleInvite(userId: string) {
    try {
      await inviteCollab(id!, userId);
      setinvited((current) => [...current, userId]);
    } catch (error) {}
  }

  function verifyInvited(id:string){
    const invited = inviteds.includes(id)
    if(invited) return true;
    return false; 
  }

  return (
    <Contacts>
      <ul>
        {data &&
          data.map((item, i) => (
            <li key={i}>
              <div className="user">
                <img src={formatImage(item.perfilPhoto)} alt="user_photo" />
                <span>{item.name}</span>
              </div>
              {showInviteButton(item.id) && !verifyInvited(item.id) ? 
                <button onClick={() => handleInvite(item.id)}>Convidar</button>
                :
                <button>Convidado <CheckIcon /> </button>
            }
            </li>
          ))}
      </ul>
    </Contacts>
  );
};

export default InviteContact;
