import React, { useState } from "react";
import { IPost } from "../../types/post";
import { PostItem } from "./style";
import defaultImage from "../../assets/default.jpg";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";

const Post = ({ id, userId, name, content, image, perfilPhoto }: IPost) => {
  const [likes, setLikes] = useState<string[]>([]);
  const [liked, setLiked] = useState<boolean>(false);

  const { user } = useAuth();

  async function handleLike() {
    setLiked((current) => (current ? false : true));
  }

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
        </div>
      </div>
      {content && <div dangerouslySetInnerHTML={{ __html: content }} />}
      {image && (
        <img
          src={`http://localhost:3000/${image}`}
          id="post_image"
          alt="image"
        />
      )}
      <div className="interactions">
        <div>
          <AiFillHeart />
          Curtir
        </div>
        <div>
          <BiComment />
          Comentar
        </div>
      </div>
    </PostItem>
  );
};

export default Post;
