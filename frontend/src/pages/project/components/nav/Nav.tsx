import { useFetching } from "../../../../shared/hooks/useFetching";
import { useState } from "react";
import { NavContainer } from "./styles";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import Chat from "../chat/Chat";
import Task from "../task/Task";
import Collabs from "../collabs/Collabs";
import Infos from "../infos/Infos";
import { useAuth } from "../../../../shared/hooks/auth";
import { IUser } from "../../../../shared/types/user";

interface props {
  id: string;
  handleTab: (item: JSX.Element) => void;
}

type IProject = {
  name: string;
  perfilImage?: string;
  ownerId: string;
};

const Nav = ({ id, handleTab }: props) => {
  const { user } = useAuth();
  const [selected, setSelected] = useState<string>("info");
  const { data, error } = useFetching<IProject>({
    url: `/project/${id}`,
    dependeces: [id],
  });
  const handleSelect = (data: JSX.Element, type: string) => {
    handleTab(data);
    setSelected(() => type);
  };

  const { data: collabs } = useFetching<IUser[]>({
    url: `/project/collabs/${id}`,
    dependeces: [id],
  });

  function verifyUserIsCollab() {
    const isACollab = collabs?.filter((collab) => collab.id === user!.id);
    if (isACollab && isACollab.length > 0) return true;
    return false;
  }

  return (
    <NavContainer>
      <>
        {data && (
          <div className="project">
            <span>{data.name}</span>
          </div>
        )}
        <ul className="tab_itens">
          {verifyUserIsCollab() && (
            <>
              <li
                className={selected === "chat" ? "selected" : ""}
                onClick={() => handleSelect(<Chat />, "chat")}
              >
                <IoChatbubblesSharp />
                <span>Chat</span>
              </li>
              <li
                className={selected === "task" ? "selected" : ""}
                onClick={() => handleSelect(<Task />, "task")}
              >
                <BsListTask />
                <span>Tarefas</span>
              </li>
              <li
                className={selected === "collab" ? "selected" : ""}
                onClick={() => handleSelect(<Collabs />, "collab")}
              >
                <FiUsers />
                <span>Colaboradores</span>
              </li>
            </>
          )}
          <li
            className={selected === "info" ? "selected" : ""}
            onClick={() => handleSelect(<Infos />, "info")}
          >
            <AiFillInfoCircle /> <span>Info</span>
          </li>
        </ul>
      </>
    </NavContainer>
  );
};

export default Nav;
