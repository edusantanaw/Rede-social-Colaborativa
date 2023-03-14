import { useEffect, useState } from "react";

type props<T, R, D> = {
  service: (data: T) => Promise<R[]>;
  args: T;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  dependeces?: D;
};

const options = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,
};

export function useInfiniteScroll<T, R, D>({
  service,
  args,
  dependeces,
  ref,
}: props<T, R, D>) {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<R[]>([]);

  useEffect(() => {
    async () => {
      await fetchingData();
    };
  }, [page, dependeces]);

  useEffect(() => {
    handleObservable(ref);
  }, []);

  async function fetchingData() {
    const data = await service({ ...args, page });
    setList((list) => [...list, ...data]);
  }

  function handleObservable(
    ref: React.MutableRefObject<HTMLDivElement | null>
  ) {
    const observable = new IntersectionObserver((entry) => {
      const target = entry[0];
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    }, options);

    if (ref.current) {
      observable.observe(ref.current);
    }
  }

  return { list };
}
