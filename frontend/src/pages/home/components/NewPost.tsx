import React, { useRef, useState } from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

interface props {
  handleCreate: (image: File | null, content: string | null) => Promise<void>;
}

const NewPost = ({ handleCreate }: props) => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const contentRef = useRef<HTMLTextAreaElement | null>(null);

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
    if (contentRef.current) {
      const content = contentRef.current.value;
      await handleCreate(image, content);
    }
  }

  function clearImage() {
    setImage(null);
    setPrevImage(undefined);
  }

  return (
    <NewPostContainer>
      <div className="new">
        <div>
          <BsFillPersonFill />
        </div>
        <textarea placeholder="Criar novo post" ref={contentRef} />
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
