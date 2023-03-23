import { useState, useRef } from "react";
import Editor from "../../../components/editor/Editor";
import { useAuth } from "../../../hooks/auth";
import { createProject } from "../../../services/project";
import { NewProject } from "./styles";

interface props {
  handleProjectModal: () => void;
}

export const NewProjectModal = ({ handleProjectModal }: props) => {
  const [description, setDescription] = useState<string>("");
  const nameRef = useRef<HTMLInputElement | null>(null);

  const {user} = useAuth()

  const getContent = (content: string) => {
    setDescription(content);
  };

  async function handleCreate(){
    if(!nameRef.current)return;
    const name = nameRef.current.value;
    if(name.length === 0 || description.length === 0) return;
    await createProject({description, name, ownerId: user!.id })
  }

  return (
    <NewProject className="new_project">
      <div className="close" onClick={handleProjectModal} />
      <div className="new">
        <div id="input">
          <label htmlFor="name">Nome do projeto:</label>
          <input
            type="text"
            id="name"
            placeholder="Digite o nome do projeto..."
            ref={nameRef}
          />
        </div>
        <Editor getContent={getContent} placeholder= "Descrição do projeto" />
        <div className="create">
            <button onClick={handleCreate}>Criar</button>
        </div>
      </div>
    </NewProject>
  );
};
