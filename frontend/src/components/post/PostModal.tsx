import React, { useRef, useEffect, useState } from "react";
import { IPost } from "../../types/post";
import { PostModalContainer } from "./style";
import defaultImage from "../../assets/default.jpg";
import { baseUrl } from "../../constants/baseUrl";
import { useAuth } from "../../hooks/auth";
import { createComment, loadComments } from "../../services/post";

interface props {
  post: IPost;
  handleModal: () => void;
}

type IComment = {
  content: string;
  userId: string;
  perfilPhoto?: string;
};

const PostModal = ({ handleModal, post }: props) => {
  const { user } = useAuth();
  const [comments, setComments] = useState<IComment[]>([]);
  const commentRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (commentRef.current) commentRef.current.focus();
  }, []);

  useEffect(() => {
    (async () => {
      const loadedComments = await loadComments(post.id);
      setComments((current) => [...loadedComments]);
    })();
  }, []);

  const userImage = post.perfilPhoto
    ? `${baseUrl}/${post.perfilPhoto}`
    : defaultImage;

  async function handleCreateComment() {
    if (!commentRef.current) return;
    const comment = commentRef.current.value;
    if (comment.length === 0) return;
    const newComment = await createComment({
      content: comment,
      userId: user!.id,
      postId: post.id,
    });
    setComments((current) => [...current, newComment]);
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
          <ul>
            {comments.length > 0 && comments.map((comment, i)=>(
              <li key={i}>
                {comment.content}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PostModalContainer>
  );
};

export default PostModal;
