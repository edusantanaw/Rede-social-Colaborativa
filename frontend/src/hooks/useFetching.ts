import { useState, useEffect } from "react";
import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

interface props {
  url: string;
  dependeces: unknown[];
}

export async function useFetching<T>({ url, dependeces }: props) {
  const [data, setData] = useState<T | null>();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const response = await Api.get(url, makeOptions());
        setData(response.data);
      } catch (error) {
        const err = error as { response: { data: string } };
        setError(err.response.data);
      }
      setIsLoading(false);
    })();
  }, [...dependeces]);

  return {
    data,
    error,
    isLoading
  };
}
