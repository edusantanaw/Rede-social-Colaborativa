import { useEffect, useState } from "react";

type props<T, R, D> = {
  service: (data: { page: number; args?: T }) => Promise<R[]>;
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
  dependeces,
  ref,
}: props<T, R, D>) {
  const [page, setPage] = useState<number>(0);
  const [list, setList] = useState<R[]>([]);

  useEffect(() => {
    (async () => {
      console.log("fetchingDa");
      await fetchingData();
    })();
  }, [page, dependeces]);

  useEffect(() => {
    const observable = new IntersectionObserver((entry) => {
      const target = entry[0];
      if (target.isIntersecting) {
        console.log(target.isIntersecting);
        setPage((page) => page + 1);
      }
    }, options);

    if (ref.current) {
      observable.observe(ref.current);
    }
  }, []);

  async function fetchingData() {
    const data = await service({ page });
    setList((list) => [...list, ...data]);
  }

  return { list };
}
