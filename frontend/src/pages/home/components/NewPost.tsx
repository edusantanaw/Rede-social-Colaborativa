import React, { useRef, useState } from "react";
import { NewPostContainer } from "./styles";
import { BsFillPersonFill, BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useAuth } from "../../../hooks/auth";
import { creaetPost} from '../../../services/post'

const NewPost = () => {
  const [image, setImage] = useState<File | null>(null);
  const [prevImage, setPrevImage] = useState<string | undefined>();
  const { user } = useAuth();
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

  async function handleCreate(){
    if(user && contentRef.current){
      const formData = new FormData()
      image ? formData.append("image", image): null;
      formData.append("content", contentRef.current.value)
      await creaetPost(formData)
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
        <button onClick={handleCreate}>Criar</button>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
