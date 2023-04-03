import React, { useRef } from "react";
import { useInfiniteScroll } from "../../../shared/hooks/useInfiniteScroll";
import { loadPostByUser } from "../../../services/post";
import { IPost } from "../../../shared/types/post";
import PostItem from "../../../components/post/Post";
import { Skeleton } from "@mui/material";
import NoContent from "../../../components/animations/NoContent";

type props = {
  id: string;
};

const Post = ({ id }: props) => {
  const postEndRef = useRef<HTMLDivElement | null>(null);
  const { list, loading } = useInfiniteScroll<string, IPost, string>({
    service: loadPostByUser,
    ref: postEndRef,
    options: id,
    dependeces: undefined,
  });

  const item = [1, 2, 3, 4];

  return (
    <div className="posts">
      <ul id="preload">
        {loading &&
          item.map((i, k) => (
            <Skeleton
              key={k}
              variant="rectangular"
              width="37em"
              height="10em"
              sx={{ borderRadius: "8px", background: "rgb(10, 10, 10)" }}
            />
          ))}
      </ul>
      <ul>
        {list.length > 0 ? (
          list.map((item, i) => <PostItem key={i} {...item} />)
        ) : (
          <NoContent />
        )}
      </ul>
      <div ref={postEndRef} />
    </div>
  );
};

export default Post;
