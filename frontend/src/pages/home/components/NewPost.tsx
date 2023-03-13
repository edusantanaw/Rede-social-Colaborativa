import React, { useState } from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

const NewPost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();

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
        <textarea placeholder="Criar novo post" />
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
        <button>Criar</button>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
