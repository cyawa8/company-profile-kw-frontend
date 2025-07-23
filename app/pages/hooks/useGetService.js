import { useQuery } from '@tanstack/react-query';
import { getService } from '@/_lib/api';
import { useMemo } from 'react';


export function useGetService(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['service'],
        queryFn: getService, 
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

