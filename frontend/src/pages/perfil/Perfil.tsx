import {  useParams } from "react-router-dom";
import { useFetching } from "../../hooks/useFetching";
import { IUser } from "../../types/user";
import { PerfilContainer } from "./style";

import Post from "./Components/Post";
import PerfilInfos from "./Components/PerfilInfos";

const Perfil = () => {
  const { id } = useParams<{ id: string }>();

  const { data, error, isLoading } = useFetching<IUser>({
    url: `/user/${id}`,
    dependeces: [id],
  });

  if (!data) {
    return <></>;
  }

  return (
    <PerfilContainer>
      <PerfilInfos data={data} />
      {data && <Post id={id!} />}
    </PerfilContainer>
  );
};

export default Perfil;
