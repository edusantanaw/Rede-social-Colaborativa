import { AxiosError } from "axios";
import React, { useRef, useState } from "react";
import Editor from "../../../../../components/editor/Editor";
import { createTask } from "../../../../../services/project";
import { NewTaskModal } from "./styles";
import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

interface props {
  handleNewTask: (data: any) => void;
}

const NewTask = ({ handleNewTask }: props) => {
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();

  const titleRef = useRef<HTMLInputElement | null>(null);

  const handleContent = (data: string) => {
    setDescription(() => data);
  };

  async function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleRef.current!.value;
    try {
      const response = await createTask({ title, description, projectId: id! });
      handleNewTask(response);
    } catch (error) {
      const message = error as AxiosError<string>;
      setError(message.response!.data);
    }
  }

  return (
    <NewTaskModal onSubmit={handleCreateTask}>
      <div className="title">
        <label htmlFor="title">Titulo:</label>
        <input type="text" id="title" ref={titleRef} placeholder="Titulo" />
      </div>
      <Editor placeholder="Descriçao" getContent={handleContent} />
      {error && (
        <Typography textAlign="center" color="error">
          {error}
        </Typography>
      )}
      <input type="submit" />
    </NewTaskModal>
  );
};

export default NewTask;
