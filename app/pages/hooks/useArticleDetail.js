import { useQuery } from "@tanstack/react-query";
import { getArticleDetailById } from "../_lib/api";

export function useArticleDetail({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articleDetail", id],
    queryFn: () => getArticleDetailById(id),
    enabled: !!id,
    staleTime: 0,
    refetchOnMount: true,
  });

  return {
    data,
    isLoading,
    error,
  };
}
