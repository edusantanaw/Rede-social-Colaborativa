import React from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../../../../../shared/hooks/useFetching";
import { ITask } from "../../../../../shared/types/project";
import { Card, TodoContainer } from "../styles";

interface props {
  newTask: ITask | null;
}

const TODO = ({ newTask }: props) => {
  const { id } = useParams<{ id: string }>();

  const { data: todo, error } = useFetching<ITask[]>({
    url: `/project/tasks/${id}?done=false`,
    dependeces: [newTask],
  });

  const { data: done } = useFetching({ url: `/project/tasks/${id}?done=true` });

  return (
    <TodoContainer>
      <div className="todo">
        <span>A fazer</span>
        <ul>
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
          <Card>
            <h2>Titulo da tarefa</h2>
            <p>Descriçao da tarefa</p>
          </Card>
        </ul>
      </div>
    </TodoContainer>
  );
};

export default TODO;
