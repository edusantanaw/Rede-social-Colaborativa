import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import Editor from "../../../../components/editor/Editor";
import Modal from "../../../../components/modal/Modal";
import { useAuth } from "../../../../shared/hooks/auth";
import { usePrevImage } from "../../../../shared/hooks/usePrevImage";
import { formatImage } from "../../../../shared/utils/formatImage";
import { NewProjectContent } from "./styles";

interface props {
  handleCreate: (image: File | null, content: string | null) => Promise<void>;
  handleModal: () => void;
}

const NewPostModal = ({ handleCreate, handleModal }: props) => {
  const [content, setContent] = useState<string | null>(null);

  const { user } = useAuth();
  const { handleImageChange, image, prevImage, clearImage } = usePrevImage();

  function resetComponent() {
    clearImage();
    setContent(null);
  }

  async function handleCreatePost() {
    try {
      if (!content && !image) return;
      await handleCreate(image, content);
      handleModal();
      resetComponent(); 
    } catch (error) {
      console.log(error);
    }
  }

  function getContent(data: string) {
    setContent(data);
  }
  return (
    <Modal open={true} handleClose={handleModal}>
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
            <BsCardImage color="#fff" />
          </label>
          <input type="file" id="img_file" onChange={handleImageChange} />
          <button onClick={handleCreatePost}>Criar</button>
        </div>
      </NewProjectContent>
    </Modal>
  );
};

export default NewPostModal;
