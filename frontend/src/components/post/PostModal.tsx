import React from "react";
import { IPost } from "../../types/post";
import { PostModalContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import { baseUrl } from "../../constants/baseUrl";

interface props {
  post: IPost;
  handleModal: () => void;
}

const PostModal = ({ handleModal, post }: props) => {
  const userImage = post.perfilPhoto
    ? `${baseUrl}/${post.perfilPhoto}`
    : defaultImage;

  return (
    <PostModalContainer>
      <div className="close" onClick={handleModal} />
      <div className="content" id={post.image ? "hor" : "vert"}>
        <div className="post">
          <div className="user">
            <img src={userImage} alt="user_photo" />
            <span>{post.name}</span>
          </div>
          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          )}
          {post.image && (
            <img
              src={`http://localhost:3000/${post.image}`}
              id="post_image"
              alt="image"
            />
          )}
        </div>
        <div className="comments">
            <div className="new_comment">
                <input type="text" placeholder="Digite o seu comentario..." />
                <button>Enviar</button>
            </div>
            <span>Comentarios:</span>
            <ul>
            </ul>
        </div>
      </div>
    </PostModalContainer>
  );
};

export default PostModal;
