import { AxiosError } from "axios";
import React, { useRef, useState } from "react";
import Editor from "../../../../../components/editor/Editor";
import { createTask } from "../../../../../services/project";
import { NewTaskModal } from "./styles";
import {
  MenuItem,
  TextField,
  ThemeProvider,
  Select,
  Typography,
  createTheme,
  SelectChangeEvent,
  InputLabel,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useFetching } from "../../../../../shared/hooks/useFetching";
import { IUser } from "../../../../../shared/types/user";

interface props {
  handleNewTask: (data: any) => void;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const NewTask = ({ handleNewTask }: props) => {
  const [description, setDescription] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const [assignedTo, setAssignedTo] = useState<string>();

  const titleRef = useRef<HTMLInputElement | null>(null);

  const { data } = useFetching<IUser[]>({
    url: `/project/collabs/${id}`,
  });

  const handleContent = (data: string) => {
    setDescription(() => data);
  };

  function handleAssigned(e: SelectChangeEvent) {
    setAssignedTo(() => e.target.value);
  }

  async function handleCreateTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const title = titleRef.current!.value;
    try {
      const response = await createTask({
        title,
        description,
        assignedTo,
        projectId: id!,
      });
      handleNewTask(response);
    } catch (error) {
      const message = error as AxiosError<string>;
      setError(message.response!.data);
    }
  }

  return (
    <NewTaskModal onSubmit={handleCreateTask}>
      <ThemeProvider theme={darkTheme}>
        <InputLabel id="title">Titulo</InputLabel>
        <TextField
          label="Titulo"
          color="secondary"
          variant="outlined"
          inputRef={titleRef}
        />
        <InputLabel id="assigned">Atribuir para</InputLabel>
        <Select
          id="assigned"
          variant="outlined"
          onChange={handleAssigned}
          value={assignedTo}
          color="secondary"
          sx={{ color: "#fff" }}
        >
          <MenuItem value="">None</MenuItem>
          {data &&
            data.map((item, i) => (
              <MenuItem value={item.id} key={i}>
                {item.name}
              </MenuItem>
            ))}
        </Select>
        <Editor placeholder="Descriçao" getContent={handleContent} />
        {error && (
          <Typography textAlign="center" color="error">
            {error}
          </Typography>
        )}

        <input type="submit" />
      </ThemeProvider>
    </NewTaskModal>
  );
};

export default NewTask;
