import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import defaultImage from "../../shared/assets/default.jpg";
import { useAuth } from "../../shared/hooks/auth";
import { useFetching } from "../../shared/hooks/useFetching";
import { addOrRemoveLike } from "../../services/post";
import { IPost } from "../../shared/types/post";
import PostModal from "./PostModal";
import { PostItem } from "./style";
import { formatImage } from "../../shared/utils/formatImage";

const Post = (post: IPost) => {
  const { id, userId, name, content, image, perfilPhoto } = post;
  const [liked, setLiked] = useState<boolean>(false);
  const [totLikes, setTotLikes] = useState<number>(0);
  const [showPostModal, setShowPostModal] = useState<boolean>(false);

  const { user } = useAuth();

  const { data, error } = useFetching<string[]>({
    url: `/post/like/${id}`,
    dependeces: [],
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.includes(user!.id)) {
        setLiked(() => true);
        setTotLikes(data.length);
      }
    }
  }, [data]);

  async function handleLike() {
    await addOrRemoveLike(id, user!.id);
    if (liked) {
      setLiked(false);
      setTotLikes((tot) => tot - 1);
      return;
    }
    setLiked(true);
    setTotLikes((tot) => tot + 1);
  }

  function handlePostModal() {
    console.log(showPostModal);
    setShowPostModal((show) => (show ? false : true));
  }

  console.log(post)
  return (
    <>
      {showPostModal && <PostModal post={post} handleModal={handlePostModal} />}
      <PostItem>
        <div className="top">
          <img
            id="perfil_image"
            src={formatImage(post.perfilPhoto)}
            alt="user_photo"
            loading="lazy"
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
        <div className="likes">
          <span>{totLikes} Curtidas</span>
        </div>
        <div className="interactions">
          <div onClick={handleLike}>
            <AiFillHeart id={liked ? "liked" : ""} />
            Curtir
          </div>
          <div onClick={handlePostModal}>
            <BiComment />
            Comentar
          </div>
        </div>
      </PostItem>
    </>
  );
};

export default Post;
