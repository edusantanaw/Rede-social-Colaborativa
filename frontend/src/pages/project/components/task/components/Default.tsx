import { ITask } from "../../../../../shared/types/project";
import { Card, TodoContainer } from "../styles";
import ItemSkeleton from "./itemSkeleton";

interface props {
  todo: ITask[] | null;
  done: ITask[] | null;
  isLoading: boolean;
}

const DefaulTask = ({ todo = [], done = [], isLoading }: props) => {
  const tasksSkelleton = [1, 2];
  return (
    <TodoContainer>
      <div className="todo">
        <span>A fazer</span>
        <ul>
          {isLoading &&
            tasksSkelleton.map((item, i) => (
              <li key={i}>
                <ItemSkeleton />
              </li>
            ))}
          {todo &&
            todo.map((item, i) => (
              <Card key={i}>
                <h2>{item.title}</h2>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Card>
            ))}
        </ul>
      </div>
      <div className="done">
        <span>Feito</span>
        <ul>
          {isLoading &&
            tasksSkelleton.map((item, i) => (
              <li key={i}>
                <ItemSkeleton />
              </li>
            ))}
          <Card>
            <h2>Titulo da tarefa</h2>
            <p>Descriçao da tarefa</p>
          </Card>
        </ul>
      </div>
    </TodoContainer>
  );
};

export default DefaulTask;
