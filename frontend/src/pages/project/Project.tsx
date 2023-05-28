import { Skeleton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../shared/hooks/auth";
import { useFetching } from "../../shared/hooks/useFetching";
import { IProject } from "../../shared/types/project";
import { formatImage } from "../../shared/utils/formatImage";
import Chat from "./components/chat/Chat";
import Nav from "./components/nav/Nav";
import { ProjectContainer, Projects } from "./styles";
import Infos from "./components/infos/Infos";
import { IUser } from "../../shared/types/user";

const Project = () => {
  const { id } = useParams<{ id: string }>();
  const [CurrentItem, setCurrentItem] = useState<JSX.Element>(<Chat />);

  const { user } = useAuth();

  const { data: collabs } = useFetching<IUser[]>({
    url: `/project/collabs/${id}`,
    dependeces: [id],
  });

  function verifyUserIsCollab() {
    const isACollab = collabs?.filter((collab) => collab.id === user?.id);
    if (isACollab && isACollab.length > 0) return true;
    return false;
  }

  useEffect(() => {
    if (!verifyUserIsCollab()) {
      setCurrentItem(() => <Infos />);
    }
  }, []);

  const { data, error, isLoading } = useFetching<IProject[]>({
    url: `/project/user/${user?.id}`,
    dependeces: [],
  });

  function handleTab(item: JSX.Element) {
    setCurrentItem(() => item);
  }

  return (
    <>
      {isLoading ? <Skeleton
        variant="rectangular"
        width="100%"
        height="100%"
        sx={{ background: "rgba(255, 255, 255, 0.2)" }}
      /> :
        <ProjectContainer>
          <Projects>
            {data &&
              data.map((project, i) => (
                <li key={i} className={project.id === id ? "current" : ""}>
                  <Link to={`/project/${project.id}`}>
                    <img
                      src={formatImage(project.perfilImage)}
                      alt="project_image"
                    />
                  </Link>
                </li>
              )
              )}
          </Projects>
          <Nav id={id!} handleTab={handleTab} />
          <div className="tab">{CurrentItem}</div>
        </ProjectContainer >}
    </>
  );
};

export default Project;
