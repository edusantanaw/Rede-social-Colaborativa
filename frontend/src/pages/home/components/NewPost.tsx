import React, { useRef, useState } from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Editor from "../../../components/editor/Editor";

interface props {
  handleCreate: (image: File | null, content: string | null) => Promise<void>;
}

const NewPost = ({ handleCreate }: props) => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const [content, setContent] = useState<string | null>(null);
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
    if(!content) return;
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
  }

  function getContent(data: string) {
    setContent(data);
  }

  return (
    <NewPostContainer>
      <div className="new">
        <div id="photo_perfil">
          <BsFillPersonFill />
        </div>
        <Editor getContent={getContent} />
      </div>
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
    </NewPostContainer>
  );
};

export default NewPost;
