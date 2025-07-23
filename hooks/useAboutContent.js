"use client"

import { useQuery } from '@tanstack/react-query';
import { getAboutContent } from '@/_lib/api';
import { useMemo } from "react";

export function useAboutContent(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['aboutContent'],
        queryFn: getAboutContent, 
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

