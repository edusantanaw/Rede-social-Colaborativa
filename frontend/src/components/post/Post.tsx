import React, { useState, useEffect } from "react";
import { IPost } from "../../types/post";
import { PostItem } from "./style";
import defaultImage from "../../assets/default.jpg";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { useAuth } from "../../hooks/auth";
import { useFetching } from "../../hooks/useFetching";
import { addOrRemoveLike } from "../../services/post";

const Post = ({ id, userId, name, content, image, perfilPhoto }: IPost) => {
  const [liked, setLiked] = useState<boolean>(false);

  const { user } = useAuth();

  const { data, error } = useFetching<string[]>({
    url: `/post/like/${id}`,
    dependeces: [],
  });

  useEffect(() => {
    if (data) {
      if (data.includes(user!.id)) {
        setLiked((liked) => true);
      }
    }
  }, [data]);

  async function handleLike() {
    await addOrRemoveLike(id, user!.id);
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
        <div onClick={handleLike}>
          <AiFillHeart id={liked ? "liked" : ""} />
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
