import React, { useRef, useEffect } from "react";
import Post from "../../../../components/post/Post";
import { useInfiniteScroll } from "../../../../shared/hooks/useInfiniteScroll";
import { loadFeed } from "../../../../services/post";
import { Skeleton } from "@mui/material";
import { FeedContainer } from "./styles";

interface props {
  newPost: any;
}

const Feed = ({ newPost }: props) => {
  const intersectRef = useRef<HTMLDivElement | null>(null);

  const { list, addItem, loading } = useInfiniteScroll({
    service: loadFeed,
    ref: intersectRef,
    options: undefined,
  });

  const item = [1, 2, 3, 4];

  useEffect(() => {
    if (newPost) addItem(newPost);
  }, [newPost]);

  return (
    <FeedContainer>
      {loading ? (
        <ul id="preload">
          {item.map((i, k) => (
            <Skeleton
              key={k}
              variant="rectangular"
              width="37em"
              height="10em"
              sx={{borderRadius: "8px", background: "rgb(10, 10, 10)"}}
            />
          ))}
        </ul>
      ) : (
        <ul>
          {list.length > 0 && list.map((item, i) => <Post key={i} {...item} />)}
        </ul>
      )}
      <div className="intersect" ref={intersectRef} />
    </FeedContainer>
  );
};

export default Feed;
