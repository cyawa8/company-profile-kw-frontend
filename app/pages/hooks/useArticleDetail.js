import { useQuery } from "@tanstack/react-query";
import { getArticleDetailByGroupId } from "../_lib/api";

export function useArticleDetail({ id, lang }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["articleDetail", id, lang],
    queryFn: () => getArticleDetailByGroupId(id, lang),
    staleTime: 0,
    refetchOnMount: true,
  });

  return {
    data,
    isLoading,
    error,
  };
}
