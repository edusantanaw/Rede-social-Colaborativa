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
  console.log(error);

  console.log(data);
  return (
    <ul>
      {data &&
        data.map((item) => (
          <UserContainer>
            <div className="item">
              <img src={formatImage(item.perfilImage)} alt="" />
              <span>{item.name}</span>
            </div>
          </UserContainer>
        ))}
    </ul>
  );
};

export default Projects;
