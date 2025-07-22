"use client"

import { useQuery } from '@tanstack/react-query';
import { getContact } from '@/pages/_lib/api';
import { useMemo } from "react";

export function useContact(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['contact'],
        queryFn: getContact, 
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

