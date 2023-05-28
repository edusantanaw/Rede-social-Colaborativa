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
  handleUpdate: (todo: ITask[], done: ITask[]) => void;
}

const DefaulTask = ({
  todo = [],
  done = [],
  isLoading,
  handleUpdate,
}: props) => {
  const tasksSkelleton = [1, 2];
  const [currentTask, setCurrentTask] = useState<ITask | null>(null);
  const [showTask, setShowTask] = useState<boolean>(false);

  function handleShowTask() {
    setShowTask(() => false);
    setCurrentTask(() => null);
  }

  function taskFinished(task: ITask) {
    if (todo === null) return;
    todo = todo.filter((item) => item.id != task.id);
    !done ? (done = [task]) : (done = [...done, task]);
    handleUpdate(todo, done)
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
          <Task
            task={currentTask}
            handleClose={handleShowTask}
            handleFinished={taskFinished}
          />
        </Modal>
      )}
      <div className="todo">
        <span>A fazer</span>
        <ul>
          {isLoading && Loading()}
          {todo ?
            todo.map((item, i) => (
              <Card key={i} onClick={() => handleTask(item)}>
                <h2>{item.title}</h2>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Card>
            )) : <span className="message">Nenhuma tarefa a fazer</span>}
        </ul>
      </div>
      <div className="done">
        <span>Feito</span>
        <ul>
          {isLoading && Loading()}
          {done ?
            done.map((item, i) => (
              <Card key={i} onClick={() => handleTask(item)}>
                <h2>{item.title}</h2>
                <div
                  className="description"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </Card>
            )) : <span className="message">Nenhuma tarefa concluida</span>}
        </ul>
      </div>
    </TodoContainer>
  );
};

export default DefaulTask;
