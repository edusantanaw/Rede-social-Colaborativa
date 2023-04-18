import { useState, useRef } from "react";
import Editor from "../../../../components/editor/Editor";
import { useAuth } from "../../../../shared/hooks/auth";
import { createProject } from "../../../../services/project";
import { NewProject } from "./styles";
import Modal from "../../../../components/modal/Modal";
import { TextField, ThemeProvider, createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

interface props {
  handleProjectModal: () => void;
}

export const NewProjectModal = ({ handleProjectModal }: props) => {
  const [description, setDescription] = useState<string>("");
  const nameRef = useRef<HTMLInputElement | null>(null);

  const { user } = useAuth();

  const getContent = (content: string) => {
    setDescription(content);
  };

  async function handleCreate() {
    if (!nameRef.current) return;
    const name = nameRef.current.value;
    if (name.length === 0 || description.length === 0) return;
    await createProject({ description, name, ownerId: user!.id });
  }

  return (
    <Modal open={true} handleClose={handleProjectModal}>
      <NewProject className="new">
        <ThemeProvider theme={darkTheme}>
          <TextField
            label="Nome"
            id="name"
            inputRef={nameRef}
            variant="outlined"
            style={{ width: "94%" }}
          />
        </ThemeProvider>
        <Editor getContent={getContent} placeholder="Descrição do projeto" />
        <div className="create">
          <button onClick={handleCreate}>Criar</button>
        </div>
      </NewProject>
    </Modal>
  );
};
