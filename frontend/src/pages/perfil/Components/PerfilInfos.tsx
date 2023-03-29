import React from "react";
import { IUser } from "../../../shared/types/user";
import defaultImage from "../../../shared/assets/default.jpg";
import defaultBg from "../../../shared/assets/defaultBg.jpg";
import { baseUrl } from "../../../constants/baseUrl";

interface props {
  data: IUser;
}

const PerfilInfos = ({ data }: props) => {
  return (
    <div className="content">
      <div className="main">
        <div className="photos">
          <img src={defaultBg} alt="cover" id="cover_photo" />
          <img
            src={
              data.perfilPhoto ? `${baseUrl}/${data.perfilPhoto}` : defaultImage
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
  );
};

export default PerfilInfos;
