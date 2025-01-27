import { getRelationships } from '@/features/employee/additional-info/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useRelationships = () => {
  return useQuery({
    queryKey: ['relationships'],
    queryFn: getRelationships,
  });
};
