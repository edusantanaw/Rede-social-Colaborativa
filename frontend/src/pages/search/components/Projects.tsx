import { Link } from "react-router-dom";
import { useFetching } from "../../../shared/hooks/useFetching";
import { formatImage } from "../../../shared/utils/formatImage";
import { UserContainer } from "./style";

interface props {
  name: string;
}

type IProject = {
  id: string;
  name: string;
  perfilImage?: string;
};

const Projects = ({ name }: props) => {
  const { data, error } = useFetching<IProject[]>({
    url: `/project/search/${name}`,
    dependeces: [name],
  });

  return (
    <ul>
      {data &&
        data.map((item) => (
          <Link to={`/project/${item.id}`}>
            <UserContainer>
              <div className="item">
                <img src={formatImage(item.perfilImage)} alt="" />
                <span>{item.name}</span>
              </div>
            </UserContainer>
          </Link>
        ))}
    </ul>
  );
};

export default Projects;
