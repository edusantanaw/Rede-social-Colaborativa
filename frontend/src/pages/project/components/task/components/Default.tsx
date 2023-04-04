import { useState } from "react";
import Modal from "../../../../../components/modal/Modal";
import { ITask } from "../../../../../shared/types/project";
import { Card, TodoContainer } from "../styles";
import ItemSkeleton from "./itemSkeleton";
import Task from "./taskModal/Task";

interface props {
  todo: ITask[] | null;
  done: ITask[] | null;
  isLoading: boolean;
}

const DefaulTask = ({ todo = [], done = [], isLoading }: props) => {
  const tasksSkelleton = [1, 2];
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [showTask, setShowTask] = useState<boolean>(false);

  function handleShowTask() {
    setShowTask(() => false);
    setCurrentTask(() => null);
  }

  function Loading() {
    return tasksSkelleton.map((item, i) => (
      <li key={i}>
        <ItemSkeleton />
      </li>
    ));
  }

  function handleTask(task: ITask) {
    setShowTask(() => true);
    setCurrentTask(() => task);
  }

  return (
    <TodoContainer>
      {currentTask && (
        <Modal handleClose={handleShowTask} open={showTask}>
          <Task task={currentTask} handleClose={handleShowTask} />
        </Modal>
      )}
      <div className="todo">
        <span>A fazer</span>
        <ul>
          {isLoading && Loading()}
          {todo &&
            todo.map((item, i) => (
              <Card key={i} onClick={() => handleTask(item)}>
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
          {isLoading && Loading()}
          {done &&
            done.map((item, i) => (
              <Card key={i} onClick={() => handleTask(item)}>
                <h2>{item.title}</h2>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Card>
            ))}
        </ul>
      </div>
    </TodoContainer>
  );
};

export default DefaulTask;
