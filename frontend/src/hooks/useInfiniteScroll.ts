import { useEffect, useState } from "react";

type props<T, R, D> = {
  service: (page: number, options?: T) => Promise<R[]>;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  dependeces?: D;
  options: T;
};

const config = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,
};

export function useInfiniteScroll<T, R, D>({
  service,
  dependeces,
  ref,
  options,
}: props<T, R, D>) {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<R[]>([]);

  useEffect(() => {
    (async () => {
      const data = await service(page, options);
      setList((list) => [...list, ...data]);
    })();
  }, [page, dependeces]);

  useEffect(() => {
    const observable = new IntersectionObserver((entry) => {
      const target = entry[0];
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    }, config);

    if (ref.current) {
      observable.observe(ref.current);
    }
  }, []);

  const addItem = (item: R) => {
    setList((list) => [item, ...list]);
  };

  return { list, addItem };
}
