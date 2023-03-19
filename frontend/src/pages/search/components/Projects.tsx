import { useFetching } from "../../../hooks/useFetching";

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
  return <div>User</div>;
};

export default Projects;
