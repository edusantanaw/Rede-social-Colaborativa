import { useFetching } from "../../../../hooks/useFetching";
import { formatImage } from "../../../../utils/formatImage";
import { NavContainer } from "./styles";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsListTask } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";
import Chat from "../chat/Chat";
import Task from "../task/Task";
import Collabs from "../collabs/Collabs";
import Infos from "../infos/Infos";

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
  const { data } = useFetching<IProject>({
    url: `/project/${id}`,
    dependeces: [],
  });

  return (
    <NavContainer>
      <>
        {data && (
          <div className="project">
            <img src={formatImage(data.perfilImage)} alt="project_perfilImg" />
            <span>{data.name}</span>
          </div>
        )}
        <ul className="tab_itens">
          <li onClick={() => handleTab(<Chat />)}>
            <IoChatbubblesSharp /> Chat
          </li>
          <li onClick={() => handleTab(<Task />)}>
            <BsListTask /> Tarefas
          </li>
          <li onClick={() => handleTab(<Collabs />)}>
            <FiUsers /> Colaboradores
          </li>
          <li onClick={() => handleTab(<Infos />)}>
            <AiFillInfoCircle /> Sobre
          </li>
        </ul>
      </>
    </NavContainer>
  );
};

export default Nav;
