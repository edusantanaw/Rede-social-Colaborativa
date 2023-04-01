import { useFetching } from "../../../shared/hooks/useFetching";

interface props {
  name: string;
}

type IProject = {
  id: string;
  name: string;
};

const Projects = ({ name }: props) => {
  const { data, error } = useFetching<IProject[]>({
    url: `/project/search/${name}`,
    dependeces: [name],
  });
  console.log(error)

  console.log(data);
  return <div>{data && data.map((item) => <li>{item.name}</li>)}</div>;
};

export default Projects;
