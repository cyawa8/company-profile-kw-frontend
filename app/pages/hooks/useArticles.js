import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../_lib/api";

export function useArticles() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articles", page, pageSize],
    queryFn: () => getArticles({ page, per_page: pageSize }),
    staleTime: 0,
    refetchOnMount: true,
  });

  return {
    data,
    isLoading,
    error,
  };
}
