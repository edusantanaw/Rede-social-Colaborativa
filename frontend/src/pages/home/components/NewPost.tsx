import React from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";

const NewPost = () => {
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
        <input type="file" id="img_file" />
        <button>Criar</button>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
