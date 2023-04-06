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
    update: Utodo,
  } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=false`,
    dependeces: [newTask, id],
  });

  const { data: done, update } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=true`,
    dependeces: [id],
  });

  function updatedList(todo: ITask[], done: ITask[]) {
    Utodo(todo);
    update(done);
  }

  return (
    <DefaulTask
      done={done}
      todo={todo}
      handleUpdate={updatedList}
      isLoading={isLoading}
    />
  );
};

export default Geral;
