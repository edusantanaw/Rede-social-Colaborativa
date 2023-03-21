import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../hooks/auth";
import { createComment, loadComments } from "../../services/post";
import { IPost } from "../../types/post";
import { formatImage } from "../../utils/formatImage";
import { PostModalContainer } from "./style";

interface props {
  post: IPost;
  handleModal: () => void;
}

type IComment = {
  content: string;
  userId: string;
  perfilPhoto?: string;
  name: string;
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
      setComments(() => [...loadedComments]);
    })();
  }, []);

  async function handleCreateComment() {
    if (!commentRef.current) return;
    const comment = commentRef.current.value;
    if (comment.length === 0) return;
    const newComment = await createComment({
      content: comment,
      userId: user!.id,
      postId: post.id,
    });
    commentRef.current.value = ""
    setComments((current) => [...current, { ...newComment, name: user!.name }]);
  }

  return (
    <PostModalContainer>
      <div className="close" onClick={handleModal} />
      <div className="content" id={post.image ? "hor" : "vert"}>
        <div className="post">
          <div className="user">
            <img src={formatImage(post.perfilPhoto)} alt="user_photo" />
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
            {comments.length > 0 &&
              comments.map((comment, i) => (
                <li key={i}>
                  <div id="autor">
                    <img
                      src={formatImage(comment.perfilPhoto)}
                      alt="autor_photo"
                    />
                    <span>{comment.name}</span>
                  </div>
                  <p>{comment.content}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </PostModalContainer>
  );
};

export default PostModal;
