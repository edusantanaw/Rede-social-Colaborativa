import React from "react";
import { useFetching } from "../../../../shared/hooks/useFetching";
import { useParams } from "react-router-dom";
import { InfosContainer } from "./styles";
import { formatImage } from "../../../../shared/utils/formatImage";

type Project = {
  perfilPhoto: string;
  perfilImage: string;
  qtdCollabs: number;
  projectId: string;
  name: string;
  ownerName: string;
  createdAt: string;
  description: string;
};

const Infos = () => {
  const { id } = useParams<{ id: string }>();
  const { data, error } = useFetching<Project>({
    url: `/project/${id}`,
    dependeces: [id],
  });

  function formatData(data: string) {
    const yymmdd = data.split("T")[0];
    return yymmdd;
  }

  return (
    <InfosContainer>
      {data && (
        <>
          <div className="project">
            <img src={formatImage(data?.perfilImage)} alt="project_image" />
            <div className="desc">
              <div>
                <h3>{data.name}</h3>
                <div
                  id="description"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </div>
              <div className="owner">
                <span>Colaboradores: {data.qtdCollabs}</span>
                <span>Criado em: {formatData(data.createdAt)}</span>
                <span>Por: {data.ownerName}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </InfosContainer>
  );
};

export default Infos;
