import { useState, useEffect } from "react";
import { Api } from "../utils/api";
import { makeOptions } from "../utils/makeOptions";

interface props {
  url: string;
  dependeces?: unknown[];
}

export function useFetching<T>({ url, dependeces = [] }: props) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, [...dependeces]);

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await Api.get(url, makeOptions());
      setTimeout(() => {
        setData(response.data);
        setIsLoading(false);
      }, 100);
    } catch (error) {
      const err = error as { response: { data: string } };
      setError(err.response.data);
    }
  }

  return {
    data,
    error,
    isLoading,
  };
}
