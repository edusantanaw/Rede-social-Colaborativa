import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Editor from "../../../../components/editor/Editor";
import { baseUrl } from "../../../../constants/baseUrl";
import { useAuth } from "../../../../shared/hooks/auth";
import imageDefault from "../../../assets/default.jpg";
import { formatImage } from "../../../../shared/utils/formatImage";
import Modal from "../../../../components/modal/Modal";
import { NewProjectContent } from "./styles";

interface props {
  handleCreate: (image: File | null, content: string | null) => Promise<void>;
  handleModal: () => void;
}

const NewPostModal = ({ handleCreate, handleModal }: props) => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const [content, setContent] = useState<string | null>(null);

  const { user } = useAuth();

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    const reader = new FileReader();
    if (files) {
      for (let item of files) {
        setImage(item);
        reader.readAsDataURL(item);
        reader.onloadend = () => {
          setPrevImage(reader.result?.toString());
        };
      }
    }
  }

  async function handleCreatePost() {
    if (!content) return;
    await handleCreate(image, content);
    resetComponent();
  }

  function resetComponent() {
    setImage(null);
    setPrevImage(undefined);
    setContent(null);
  }

  function clearImage() {
    setImage(null);
    setPrevImage(undefined);
  }

  function getContent(data: string) {
    setContent(data);
  }
  return (
    <Modal
      open={true}
      handleClose={handleModal}
    >
      <NewProjectContent>
        <div className="user">
          <img src={formatImage(user?.perfilPhoto)} alt="user_photo" />
          <span>{user!.name}</span>
        </div>
        <Editor getContent={getContent} placeholder="No que está pensando?" />
        {prevImage && (
          <div className="prev_img">
            <span onClick={clearImage}>
              <IoCloseCircleOutline />
            </span>
            <img src={prevImage} alt="img" />
          </div>
        )}
        <div className="create">
          <label htmlFor="img_file">
            <BsCardImage />
          </label>
          <input type="file" id="img_file" onChange={handleImageChange} />
          <button onClick={handleCreatePost}>Criar</button>
        </div>
      </NewProjectContent>
    </Modal>
  );
};

export default NewPostModal;
