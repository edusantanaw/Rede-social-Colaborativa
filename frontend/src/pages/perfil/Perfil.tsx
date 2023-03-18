import { useParams } from "react-router-dom";

const Perfil = () => {
  const { id } = useParams<{ id: string }>();

  if(!id) return <span>User not exists!</span>

  return <div>Perfil</div>;
};

export default Perfil;
