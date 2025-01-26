import {
  getDegrees,
  getEmploymentStatuses,
  getReasonsForLeaving,
} from '@/features/employee/history/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useEmploymentStatuses = () => {
  return useQuery({
    queryKey: ['employmentStatuses'],
    queryFn: getEmploymentStatuses,
  });
};

export const useReasonsForLeaving = () => {
  return useQuery({
    queryKey: ['reasonsForLeaving'],
    queryFn: getReasonsForLeaving,
  });
};

export const useDegrees = () => {
  return useQuery({
    queryKey: ['degrees'],
    queryFn: getDegrees,
  });
};
