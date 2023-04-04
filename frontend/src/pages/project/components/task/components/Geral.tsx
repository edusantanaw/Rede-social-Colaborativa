import { useParams } from "react-router-dom";
import { useFetching } from "../../../../../shared/hooks/useFetching";
import { ITask } from "../../../../../shared/types/project";
import DefaulTask from "./Default";

interface props {
  newTask: ITask | null;
}

const Geral = ({ newTask }: props) => {
  const { id } = useParams<{ id: string }>();

  const {
    data: todo,
    error,
    isLoading,
  } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=false`,
    dependeces: [newTask, id],
  });

  const { data: done } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=true`,
    dependeces: [id]
  });

  return <DefaulTask done={done} todo={todo} isLoading={isLoading} />;
};

export default Geral;
