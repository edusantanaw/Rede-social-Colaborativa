import React from "react";
import { Card, TodoContainer } from "../styles";

const TODO = () => {
  return (
    <TodoContainer>
      <div className="todo">
        <span>A fazer</span>
        <ul>
          <Card>
            <h2>Titulo da tarefa</h2>
            <p>Descriçao da tarefa</p>
          </Card>
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
