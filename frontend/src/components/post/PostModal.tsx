import React, { useRef, useEffect } from "react";
import { IPost } from "../../types/post";
import { PostModalContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import { baseUrl } from "../../constants/baseUrl";
import { useAuth } from "../../hooks/auth";
import { createComment } from "../../services/post";

interface props {
  post: IPost;
  handleModal: () => void;
}

const PostModal = ({ handleModal, post }: props) => {
  const { user } = useAuth();

  const commentRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (commentRef.current) commentRef.current.focus();
  }, []);

  const userImage = post.perfilPhoto
    ? `${baseUrl}/${post.perfilPhoto}`
    : defaultImage;

  async function handleCreateComment() {
    if (!commentRef.current) return;
    const comment = commentRef.current.value;
    if (comment.length === 0) return;
    const newComment =await createComment({
      content: comment,
      userId: user!.id,
      postId: post.id,
    });
    console.log(newComment)
  }

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
            <input
              type="text"
              placeholder="Digite o seu comentario..."
              ref={commentRef}
            />
            <button onClick={handleCreateComment}>Enviar</button>
          </div>
          <span>Comentarios:</span>
          <ul></ul>
        </div>
      </div>
    </PostModalContainer>
  );
};

export default PostModal;
