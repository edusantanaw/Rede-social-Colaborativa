import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../../constants/baseUrl";
import { useFetching } from "../../hooks/useFetching";
import { IUser } from "../../types/user";
import { PerfilContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import defaultBg from "../../assets/defaultBg.jpg";
import { useInfiniteScroll } from "../../hooks/useInfiniteScroll";
import { loadPostByUser } from "../../services/post";
import { useRef } from "react";
import { IPost } from "../../types/post";
import Post from "./Components/Post";

const Perfil = () => {
  const { id } = useParams<{ id: string }>();
  const postEndRef = useRef<HTMLDivElement | null>(null);

  const { data, error, isLoading } = useFetching<IUser>({
    url: `/user/${id}`,
    dependeces: [id],
  });

  if (!data) {
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
      {data && <Post id={data.id } />}
    </PerfilContainer>
  );
};

export default Perfil;
