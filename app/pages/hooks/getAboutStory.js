import { useQuery } from '@tanstack/react-query';
import { getAboutPeopleStory} from '../_lib/api';
import { useMemo } from 'react';


export function useAboutStory(){
    const {data: rawData, isLoading, error} = 
    useQuery({
        queryKey: ['aboutPeople'],
        queryFn: getAboutPeopleStory, 
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

