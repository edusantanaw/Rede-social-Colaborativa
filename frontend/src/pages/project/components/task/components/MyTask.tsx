import { useParams } from "react-router-dom";
import { useFetching } from "../../../../../shared/hooks/useFetching";
import { ITask } from "../../../../../shared/types/project";
import { Card, TodoContainer } from "../styles";
import ItemSkeleton from "./itemSkeleton";
import DefaulTask from "./Default";
import { useAuth } from "../../../../../shared/hooks/auth";

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
  } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=false&assignedTo=${user?.id}`,
    dependeces: [newTask],
  });

  console.log(todo)

  const { data: done } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=true&assignedTo=${user?.id}`,
  });

  return <DefaulTask done={done} todo={todo} isLoading={isLoading} />;
};

export default MyTask;
