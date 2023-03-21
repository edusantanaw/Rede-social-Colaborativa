import { NewPostContainer } from "./styles";
import { useAuth } from "../../../hooks/auth";
import { formatImage } from "../../../utils/formatImage";

interface props {
  handleShowModal: () => void;
}

const NewPost = ({ handleShowModal }: props) => {
  const { user } = useAuth();
  return (
    <NewPostContainer onClick={handleShowModal}>
      <div className="new">
        <div id="photo_perfil">
          <img src={formatImage(user?.perfilPhoto)} alt="user_photo" />
        </div>
        <div className="new_post">
          <span>Deseja criar uma nova publicação?</span>
        </div>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
