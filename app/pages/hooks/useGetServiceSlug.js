import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { getServiceSlug } from "../_lib/api";

export function useGetServiceSlug({ slug }) {
  const { data: rawData, isLoading, error } = useQuery({
    queryKey: ["serviceSlug", slug],
    queryFn: () => getServiceSlug(slug),
    staleTime: 0,
    refetchOnMount: true,
  });

  const data = useMemo(() => {
    if (!rawData) return [];
    return Array.isArray(rawData)
      ? rawData.map((item) => ({ ...item, key: item.id }))
      : [{ ...rawData, key: rawData.id }];
  }, [rawData]);

  return { data, isLoading, error };
}
