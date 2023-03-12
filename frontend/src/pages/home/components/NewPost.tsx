import React, { useState } from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";

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

  return (
    <NewPostContainer>
      <div className="new">
        <div>
          <BsFillPersonFill />
        </div>
        <textarea placeholder="Criar novo post" />
      </div>
      <div className="create">
        <label htmlFor="img_file">
          <BsCardImage />
        </label>
        <input type="file" id="img_file" onChange={handleImageChange} />
        <button>Criar</button>
      </div>
      {prevImage ? <img src={prevImage} alt="img" /> : null}
    </NewPostContainer>
  );
};

export default NewPost;
