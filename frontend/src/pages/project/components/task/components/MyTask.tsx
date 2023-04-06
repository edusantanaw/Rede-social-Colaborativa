import { useParams } from "react-router-dom";
import { useAuth } from "../../../../../shared/hooks/auth";
import { useFetching } from "../../../../../shared/hooks/useFetching";
import { ITask } from "../../../../../shared/types/project";
import DefaulTask from "./Default";
import NewTask from "./NewTask";
import { useEffect } from "react";

interface props {
  newTask: ITask | null;
}

const MyTask = ({ newTask }: props) => {
  const { id } = useParams<{ id: string }>();
  const { user } = useAuth();

  const {
    data: todo,
    error,
    isLoading,
    update: Utodo,
  } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=false&assignedTo=${user?.id}`,
    dependeces: [id],
  });

  const { data: done, update } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=true&assignedTo=${user?.id}`,
    dependeces: [id],
  });

  useEffect(() => {
    const todoData = todo ?? [];
    if (newTask) Utodo([...todoData, newTask]);
  }, [newTask]);

  function updatedList(todo: ITask[], done: ITask[]) {
    Utodo(todo);
    update(done);
  }

  return (
    <DefaulTask
      handleUpdate={updatedList}
      done={done}
      todo={todo}
      isLoading={isLoading}
    />
  );
};

export default MyTask;
