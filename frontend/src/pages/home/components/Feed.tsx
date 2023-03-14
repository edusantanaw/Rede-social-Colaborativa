import React, { useRef } from "react";
import { useInfiniteScroll } from "../../../hooks/useInfiniteScroll";
import { loadFeed } from "../../../services/post";

const Feed = () => {
  const intersectRef = useRef<HTMLDivElement | null>(null);
  const { list } = useInfiniteScroll({
    service: loadFeed,
    ref: intersectRef,
  });
  console.log(list)
  return (
    <div>
      <div className="intersect" ref={intersectRef} />
    </div>
  );
};

export default Feed;
