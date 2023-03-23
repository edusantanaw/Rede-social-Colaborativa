import { useFetching } from "../../../hooks/useFetching";
import { formatImage } from "../../../utils/formatImage";
import { NavContainer } from "./styles";
import {IoChatbubblesSharp} from 'react-icons/io5'
import { BsListTask } from "react-icons/bs";
import { FiUsers} from "react-icons/fi";
import { AiFillInfoCircle } from "react-icons/ai";

interface props {
  id: string;
}

type IProject = {
  name: string;
  perfilImage?: string;
  ownerId: string;
};

const Nav = ({ id }: props) => {
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
          <li><IoChatbubblesSharp /> Chat</li>
          <li><BsListTask /> Tarefas</li>
          <li><FiUsers /> Colaboradores</li>
          <li><AiFillInfoCircle /> Sobre</li>
        </ul>
      </>
    </NavContainer>
  );
};

export default Nav;
