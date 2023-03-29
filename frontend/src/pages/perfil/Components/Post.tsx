import React, { useRef } from "react";
import { useInfiniteScroll } from "../../../shared/hooks/useInfiniteScroll";
import { loadPostByUser } from "../../../services/post";
import { IPost } from "../../../shared/types/post";
import PostItem from '../../../components/post/Post'

type props = {
  id: string;
};

const Post = ({ id }: props) => {
  const postEndRef = useRef<HTMLDivElement | null>(null);
  const { list } = useInfiniteScroll<string, IPost, string>({
    service: loadPostByUser,
    ref: postEndRef,
    options: id,
    dependeces: undefined,
  });
  console.log(list)
  return (
    <div className="posts">
      <ul>
        {list.length > 0 && list.map((item, i) => <PostItem key={i} {...item} />)}
      </ul>
      <div ref={postEndRef} />
    </div>
  );
};

export default Post;
