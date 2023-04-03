import React from "react";
import { ITask } from "../../../../../../shared/types/project";
import { TaskContainer } from "./styles";
import { Button, Typography } from "@mui/material";

interface props {
  task: ITask;
  handleClose: () => void;
}

const Task = ({ task, handleClose }: props) => {
  return (
    <TaskContainer>
      <h2>{task.title}</h2>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
      <Typography color="#c2c2c2">
        {" "}
        Atribuida para: {task.assignTo ?? "Qualquer"}
      </Typography>
      <div className="buttons">
        {
          <Button variant="outlined" color="secondary">
            Concluida
          </Button>
        }
        <Button variant="outlined" color="error" onClick={handleClose}>
          Fechar
        </Button>
      </div>
    </TaskContainer>
  );
};

export default Task;
