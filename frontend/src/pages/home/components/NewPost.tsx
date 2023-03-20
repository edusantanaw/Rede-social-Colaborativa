import { NewPostContainer } from "./styles";
import { useAuth } from "../../../hooks/auth";
import imageDefault from "../../../assets/default.jpg";
import { baseUrl } from "../../../constants/baseUrl";

interface props {
  handleShowModal: () => void;
}

const NewPost = ({ handleShowModal }: props) => {
  const { user } = useAuth();
  const userImage = user!.perfilPhoto
    ? baseUrl + user!.perfilPhoto
    : imageDefault;
  return (
    <NewPostContainer onClick={handleShowModal}>
      <div className="new">
        <div id="photo_perfil">
          <img src={userImage} alt="user_photo" />
        </div>
        <div className="new_post">
          <span>Deseja criar uma nova publicação?</span>
        </div>
      </div>
    </NewPostContainer>
  );
};

export default NewPost;
