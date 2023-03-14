import React, { useRef } from "react";
import Post from "../../../components/post/Post";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { loadFeed } from "../../../services/post";
import { FeedContainer } from "./styles";

const Feed = () => {
  const intersectRef = useRef<HTMLDivElement | null>(null);
  const { list } = useInfiniteScroll({
    service: loadFeed,
    ref: intersectRef,
  });
  console.log(list);
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
