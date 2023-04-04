import React, { useState } from "react";
import { ITask } from "../../../../../../shared/types/project";
import { TaskContainer } from "./styles";
import { Button, Typography } from "@mui/material";
import { AxiosError } from "axios";
import { finishTask } from "../../../../../../services/project";

interface props {
  task: ITask;
  handleClose: () => void;
}

const Task = ({ task, handleClose }: props) => {
  const [error, setError] = useState<string | null>(null);

  async function handlefinishTask() {
    try {
      await finishTask(task.id);
      handleClose();
    } catch (error) {
      const message = error as AxiosError<string>;
      setError(message.response!.data);
    }
  }

  return (
    <TaskContainer>
      <h2>{task.title}</h2>
      <div
        className="description"
        dangerouslySetInnerHTML={{ __html: task.description }}
      />
      <Typography color="#c2c2c2">
        Atribuida para: {task.assignTo ?? "Qualquer"}
      </Typography>
      {error && <Typography color="error">{error}</Typography>}
      <div className="buttons">
        {
          <Button
            onClick={handlefinishTask}
            variant="outlined"
            color="secondary"
          >
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
