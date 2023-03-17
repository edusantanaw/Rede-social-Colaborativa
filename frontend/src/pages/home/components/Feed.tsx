import React, { useRef, useEffect } from "react";
import Post from "../../../components/post/Post";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { loadFeed } from "../../../services/post";
import { FeedContainer } from "./styles";

interface props {
  newPost: any;
}

const Feed = ({ newPost }: props) => {
  const intersectRef = useRef<HTMLDivElement | null>(null);

  const { list, addItem } = useInfiniteScroll({
    service: loadFeed,
    ref: intersectRef,
  });

  useEffect(() => {
    addItem(newPost);
  }, [newPost]);

  return (
    <FeedContainer>
      <ul>
        {list.length > 0 && list.map((item, i) => <Post key={i} {...item} />)}
      </ul>
      <div className="intersect" ref={intersectRef} />
    </FeedContainer>
  );
};

export default Feed;
