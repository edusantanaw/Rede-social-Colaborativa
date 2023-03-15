import { useEffect, useState } from "react";

type props<T, R, D> = {
  service: (data: { page: number; args?: T }) => Promise<R[]>;
  ref: React.MutableRefObject<HTMLDivElement | null>;
  dependeces?: D;
  args?: T;
};

const options = {
  root: null,
  rootMargin: "20px",
  threshold: 1.0,
};

export function useInfiniteScroll<T, R, D>({
  service,
  dependeces,
  ref,
  args,
}: props<T, R, D>) {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<R[]>([]);

  useEffect(() => {
    (async () => {
      const data = await service({ page, args });
      setList((list) => [...list, ...data]);
    })();
  }, [page, dependeces]);

  useEffect(() => {
    const observable = new IntersectionObserver((entry) => {
      const target = entry[0];
      if (target.isIntersecting) {
        setPage((page) => page + 1);
      }
    }, options);

    if (ref.current) {
      observable.observe(ref.current);
    }
  }, []);
  
  return { list };
}
