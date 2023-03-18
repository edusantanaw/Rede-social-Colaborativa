import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/baseUrl";
import { useFetching } from "../../hooks/useFetching";
import { IUser } from "../../types/user";
import { PerfilContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import defaultBg from "../../assets/defaultBg.jpg";

const Perfil = () => {
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const { data, error, isLoading } = useFetching<IUser>({
    url: `/user/${id}`,
    dependeces: [id],
  });

  console.log(data, error, isLoading);

  if (!data) {
    navigate("/");
    return <></>;
  }
  return (
    <PerfilContainer>
      <div className="content">
        <div className="main">
          <div className="photos">
            <img src={defaultBg} alt="cover" id="cover_photo" />
            <img
              src={
                data.perfilPhoto
                  ? `${baseUrl}/${data.perfilPhoto}`
                  : defaultImage
              }
              alt="user_image"
              id="user_photo"
            />
          </div>
          <div className="infos">
            <h3>{data.name}</h3>
          </div>
        </div>
      </div>
    </PerfilContainer>
  );
};

export default Perfil;
