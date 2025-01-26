import { Schema } from '@/features/employee/personal-info/types/schema';
import {
  getCities,
  getStates,
} from '@/features/employee/personal-info/utils/api';
import { useFormContext } from '@/features/form/hooks/useFormContext';
import { useQuery } from '@tanstack/react-query';
import { useWatch } from 'react-hook-form';

export const useStates = () => {
  return useQuery({
    queryKey: ['states'],
    queryFn: getStates,
  });
};

export const useCities = () => {
  const { control } = useFormContext<Schema>();
  const state = useWatch({ control, name: 'state' });

  return useQuery({
    queryKey: ['cities', { state }],
    queryFn: () => getCities(state),
  });
};
