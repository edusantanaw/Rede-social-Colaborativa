import React, { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Editor from "../../../components/editor/Editor";
import { baseUrl } from "../../../constants/baseUrl";
import { useAuth } from "../../../hooks/auth";
import { Modal } from "./styles";
import imageDefault from "../../../assets/default.jpg";

interface props {
  handleCreate: (image: File | null, content: string | null) => Promise<void>;
  handleModal: () => void;
}

const NewPostModal = ({ handleCreate, handleModal }: props) => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const [content, setContent] = useState<string | null>(null);

  const { user } = useAuth();
  const userImage = user!.perfilPhoto
    ? baseUrl + user!.perfilPhoto
    : imageDefault;

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
    <Modal>
      <div className="close" onClick={handleModal} />
      <div className="new_project">
        <div className="user">
          <img src={userImage} alt="user_photo" />
          <span>{user!.name}</span>
        </div>
        <Editor getContent={getContent} />
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
      </div>
    </Modal>
  );
};

export default NewPostModal;
