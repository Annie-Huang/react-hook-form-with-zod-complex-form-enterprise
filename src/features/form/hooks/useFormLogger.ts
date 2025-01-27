import { useFormContext } from '@/features/form/hooks/useFormContext';
import { useEffect } from 'react';

export const useFormLogger = () => {
  const { watch } = useFormContext();

  useEffect(() => {
    const { unsubscribe } = watch((value) => console.log(value));
    return unsubscribe;
  }, [watch]);
};
