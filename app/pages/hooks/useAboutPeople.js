import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getAboutPeopleLeader } from '../_lib/api';


export function useAboutPeople(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['aboutPeopleLeader'],
        queryFn: getAboutPeopleLeader, 
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

