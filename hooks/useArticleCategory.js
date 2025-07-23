"use client"

import { useQuery } from '@tanstack/react-query';
import { getArticleCategory } from '@/_lib/api';
import { useMemo } from "react";

export function useArticleCategory(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['articleCategory'],
        queryFn: getArticleCategory, 
        staleTime : 0,
        refetchOnMount: true,
    })

    const data = useMemo(() => {
    if (!rawData) return []
    return Array.isArray(rawData)
      ? rawData.map(item => ({ ...item, key: item.id }))
      : [{ ...rawData, key: rawData.id }]
  }, [rawData])
    return {data, isLoading, error};
};

