import React from "react";
import { IPost } from "../../types/post";
import { PostItem } from "./style";
import defaultImage from "../../assets/default.jpg";

const Post = ({ id, userId, name, content, image, perfilPhoto }: IPost) => {
  return (
    <PostItem>
      <div className="top">
        <img
          id="perfil_image"
          src={perfilPhoto ?? defaultImage}
          alt="user_photo"
        />
        <div className="content">
          <span>{name}</span>
          <p>{content}</p>
        </div>
      </div>
      {image && <img src={image} alt="image" />}
    </PostItem>
  );
};

export default Post;
