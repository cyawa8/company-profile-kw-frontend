import { useQuery } from '@tanstack/react-query';
import { getArticleDetail } from '../_lib/api';
import { useMemo } from 'react';


export function useArticleContent(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['articleContent'],
        queryFn: getArticleDetail, 
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

