import { getTermsAndConditions } from '@/features/employee/review/utils/api';
import { useQuery } from '@tanstack/react-query';

export const useTermsAndConditions = () => {
  return useQuery({
    queryKey: ['termsAndConditions'],
    queryFn: getTermsAndConditions,
  });
};
